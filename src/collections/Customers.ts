import { onlyAdmin } from '@/access/onlyAdmin'
import { selfOrAdmin } from '@/access/selfOrAdmin'
import type { CollectionConfig } from 'payload'

export const Customers: CollectionConfig = {
  slug: 'customers',
  auth: true,
  access: {
    create: () => true,
    read: selfOrAdmin,
    update: selfOrAdmin,
    delete: onlyAdmin,
  },
  fields: [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: true,
    },
  ],
}
