import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput } from "@shared/routes";

export function useCreateContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const validated = api.contacts.create.input.parse(data);
      const res = await fetch(api.contacts.create.path, {
        method: api.contacts.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        let errorMessage = "Failed to submit contact form";
        try {
          const errorData = await res.json();
          if (errorData.message) errorMessage = errorData.message;
        } catch (e) {
          // Ignore parsing error
        }
        throw new Error(errorMessage);
      }
      
      return api.contacts.create.responses[201].parse(await res.json());
    },
  });
}
