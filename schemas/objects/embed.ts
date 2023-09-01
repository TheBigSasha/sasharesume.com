/*
 * This file was automatically generated by thebigsasha's Sanity Codegen. (http://thebigsasha.github.io/sanity_config_creator/)
 * Read more at the link above.
 */
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'object',
  name: 'Embed',
  title: 'embed',
  description: 'An iFrame to be used for embedding interactive content.',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The title of the entry',
    }),
    defineField({
      type: 'url',
      name: 'href',
      title: 'Embed URL',
      description: 'The URL which will be displayed in the iFrame',
    }),
    defineField({
      type: 'url',
      name: 'hrefAction',
      title: 'Action URL',
      description:
        'A link to take users to a page to explore further. If left empty, default to embed URL.',
    }),
    defineField({
      type: 'string',
      name: 'summary',
      title: 'Summary',
      description: 'A quick description of the page',
    }),
    defineField({
      type: 'boolean',
      name: 'collapsed',
      title: 'Collapsed',
      description: 'Whether the embed should be collapsed by default',
    }),
    defineField({
      type: 'string',
      name: 'textAction',
      title: 'Action Text',
      description: 'The text to display for the action link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'displayMode',
      title: 'Display Mode',
      description: 'How the iFrame should render',
      options: {
        list: [
          { title: 'Small', value: 'fixed-sm' },
          { title: 'Medium', value: 'fixed-md' },
          { title: 'Large', value: 'fixed-lg' },
          { title: 'Fill', value: 'fill' },
        ],
      },
    }),
  ],
})