import { FormField } from './sharedTypes';

export const ContactInputIds = {
  Email: 'email',
  Name: 'name',
  Subject: 'subject',
} as const satisfies Record<string, string>;

export type ContactInputs = [
  FormField<typeof ContactInputIds.Email>,
  FormField<typeof ContactInputIds.Name>,
  FormField<typeof ContactInputIds.Subject>,
];
