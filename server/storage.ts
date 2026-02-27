import { db } from "./db";
import {
  contacts,
  type Contact,
  type InsertContact,
  type CreateContactRequest,
  type ContactResponse
} from "@shared/schema";

export interface IStorage {
  createContact(contact: CreateContactRequest): Promise<ContactResponse>;
}

export class DatabaseStorage implements IStorage {
  async createContact(contact: CreateContactRequest): Promise<ContactResponse> {
    const [created] = await db.insert(contacts).values(contact).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
