import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'army',
  title: 'Army',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lore',
      title: 'Lore',
      type: 'text',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Completed', value: 'completed'},
          {title: 'WIP', value: 'wip'},
          {title: 'Planned', value: 'planned'},
        ],
      },
    }),
  ],
})
