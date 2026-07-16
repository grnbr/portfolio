import z from "zod";
import { schemas as rawSchemas } from "./generated/client";

export * from "./generated/client";

export const schemas = {
  ...rawSchemas,
  ContactRequest: rawSchemas.ContactRequest.strip(),
};

export type ContactFormData = z.infer<typeof schemas.ContactRequest>;
export type LoginFormData = z.infer<typeof schemas.LoginRequest>;
export type LoginResponse = z.infer<typeof schemas.LoginResponse>;

export type ZodIssueCode = z.ZodIssueCode;
