import {Rule} from 'sanity'

export default {
  name: 'pastery',
  type: 'document',
  title: 'Pastery',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.min(1).max(75).required(),
    },
    {
      name: 'types',
      type: 'array',
      title: 'Types',
      of: [{type: 'string'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: Rule) => Rule.max(500),
    },
    {
      name: 'portions',
      type: 'number',
      title: 'Portions',
      validation: (Rule: Rule) => Rule.positive().integer(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: Rule) => Rule.positive().precision(2),
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients',
      of: [{type: 'string'}],
      validation: (Rule: Rule) => Rule.min(1),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      hotspot: true,
    },
  ],
}
