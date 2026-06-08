import { ContactFormData } from '@portfolio/types';

import { FormField } from './sharedTypes';

export type ContactFormDataKeys = keyof ContactFormData;
export type ContactInputId = Exclude<ContactFormDataKeys, 'message'>;
export type ContactTextareaId = Extract<ContactFormDataKeys, 'message'>;

export type ContactInput = {
  email: FormField<'email', 'email'>;
  name: FormField<'name', 'text'>;
  subject: FormField<'subject', 'text'>;
};

export type ContactInputKey = Capitalize<ContactFormDataKeys>;
export type ContactTextareaKey = Capitalize<ContactTextareaId>;

export type ContactFieldId = ContactFormDataKeys | ContactTextareaId;

type ContactInputMapType = {
  [K in ContactInputId as Capitalize<K>]: Pick<ContactInput[K], 'id' | 'type'>;
};

type ContactTextareaMapType = {
  [K in ContactTextareaId as Capitalize<K>]: K;
};

export const ContactInputMap: ContactInputMapType = {
  Email: {
    id: 'email',
    type: 'email',
  },
  Name: {
    id: 'name',
    type: 'text',
  },
  Subject: {
    id: 'subject',
    type: 'text',
  },
} as const;

export const ContactTextareaMap: ContactTextareaMapType = {
  Message: 'message',
} as const;

export type ContactInputsTuple = [
  ContactInput[typeof ContactInputMap.Email.id],
  ContactInput[typeof ContactInputMap.Name.id],
  ContactInput[typeof ContactInputMap.Subject.id],
];
