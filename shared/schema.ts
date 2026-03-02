import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  inquiryType: text("inquiry_type").notNull(), // e.g., "quote", "bpo", "nursing", "general"
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

const scriptOrCodePattern =
  /<[^>]*>|javascript:|vbscript:|data:text\/html|on\w+\s*=|\bscript\b|eval\s*\(|document\.|window\./i;

const hasScriptLikeContent = (value: string) => scriptOrCodePattern.test(value);

const safeText = (label: string, min = 1, max = 1000) =>
  z
    .string()
    .trim()
    .min(min, `${label} is required`)
    .max(max, `${label} is too long`)
    .refine((value) => !hasScriptLikeContent(value), {
      message: `${label} contains disallowed script or code content`,
    });

const safeOptionalText = (label: string, max = 120) =>
  z
    .string()
    .trim()
    .max(max, `${label} is too long`)
    .refine((value) => !hasScriptLikeContent(value), {
      message: `${label} contains disallowed script or code content`,
    })
    .optional()
    .nullable();

// === BASE SCHEMAS ===
export const insertContactSchema = createInsertSchema(contacts)
  .omit({ id: true, createdAt: true })
  .extend({
    name: safeText("Name", 2, 100),
    email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
    phone: z
      .string()
      .trim()
      .max(30, "Phone number is too long")
      .refine((value) => !hasScriptLikeContent(value), {
        message: "Phone number contains disallowed script or code content",
      })
      .optional()
      .nullable(),
    company: safeOptionalText("Company", 120),
    inquiryType: z.enum(["general", "bpo", "nursing", "quote"], {
      errorMap: () => ({ message: "Invalid inquiry type" }),
    }),
    message: safeText("Message", 10, 3000),
  });

// === EXPLICIT API CONTRACT TYPES ===
export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;

// Request types
export type CreateContactRequest = InsertContact;

// Response types
export type ContactResponse = Contact;
