import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'hullen-nz',

  projectId: 'yommw7i2',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  basePath: '/studio',

  schema: {
    types: schemaTypes,
  },
});
