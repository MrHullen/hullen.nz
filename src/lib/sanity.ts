import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'yommw7i2',
  dataset: 'production',
  apiVersion: '2024-05-14',
  useCdn: true,
});
