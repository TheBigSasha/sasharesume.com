import { ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField } from 'sanity'

export const PTElements = [
  defineArrayMember({
    type: 'block',
    marks: {
      annotations: [
        {
          name: 'link',
          type: 'object',
          title: 'Link',
          fields: [
            {
              name: 'href',
              type: 'url',
              title: 'Url',
            },
          ],
        },
        {
          name: 'internalLink',
          type: 'object',
          title: 'Internal Link',
          fields: [
            {
              name: 'slug',
              type: 'string',
              title: 'Slug',
            },
          ],
        },
      ],
    },
    styles: [
      { title: 'Normal', value: 'normal' },
      { title: 'H1', value: 'h1' },
      { title: 'H2', value: 'h2' },
      { title: 'H3', value: 'h3' },
      { title: 'H4', value: 'h4' },
      { title: 'H5', value: 'h5' },
      { title: 'H6', value: 'h6' },
      { title: 'Quote', value: 'blockquote' },
    ],
  }),
  defineArrayMember({
    type: 'code',
    name: 'code',
    options: {
      withFilename: true,
    },
  }),
  // Custom blocks
  defineArrayMember({
    name: 'timeline',
    type: 'timeline',
  }),
  defineArrayMember({
    name: 'linkCard',
    type: 'LinkCard',
  }),
  defineField({
    type: 'image',
    icon: ImageIcon,
    name: 'image',
    title: 'Image',
    options: {
      hotspot: true,
    },
    preview: {
      select: {
        imageUrl: 'asset.url',
        title: 'caption',
      },
    },
    fields: [
      defineField({
        title: 'Caption',
        name: 'caption',
        type: 'string',
      }),
      defineField({
        name: 'alt',
        type: 'string',
        title: 'Alt text',
        description:
          'Alternative text for screenreaders. Falls back on caption if not set',
      }),
    ],
  }),
]
