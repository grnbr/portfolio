import { FormField } from './sharedTypes';

export type ContactInputId = 'email' | 'name' | 'subject';
export type ContactTextareaId = 'message';

export type ContactInput = {
  email: FormField<'email', 'email'>;
  name: FormField<'name', 'text'>;
  subject: FormField<'subject', 'text'>;
};

export type ContactInputKeys = Capitalize<ContactInputId>;
export type ContactTextareaKeys = Capitalize<ContactTextareaId>;

export type ContactFieldsId = ContactInputId | ContactTextareaId;

type ContactInputMapType = {
  [K in ContactInputId as Capitalize<K>]: Pick<ContactInput[K], 'id' | 'type'>;
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

export const ContactTextareaMap = {
  Message: 'message',
} as const satisfies Record<ContactTextareaKeys, ContactTextareaId>;

export type ContactInputsTuple = [
  ContactInput[typeof ContactInputMap.Email.id],
  ContactInput[typeof ContactInputMap.Name.id],
  ContactInput[typeof ContactInputMap.Subject.id],
];
