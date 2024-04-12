import { CogIcon } from '@sanity/icons'
import { title } from 'lib/demo.data'
import { defineArrayMember, defineField, defineType } from 'sanity'

const links = [
  defineArrayMember({
    title: 'Reference',
    type: 'reference',
    to: [
      {
        type: 'home',
      },
      {
        type: 'page',
      },
      {
        type: 'project',
      },
      {
        type: 'ResumeDownload',
      },
    ],
  }),
  defineArrayMember({
    title: 'Custom Internal link',
    type: 'object',
    name: 'internalLink',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
        },
      },
    ],
  }),
  defineArrayMember({
    title: 'Tag link',
    type: 'object',
    name: 'tagLink',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'tag',
        type: 'string',
        title: 'Tag',
        options: {
          source: 'title',
        },
      },
    ],
  }),
  defineArrayMember({
    title: 'External link',
    type: 'object',
    name: 'externalLink',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'href',
        type: 'url',
        title: 'Url',
      },
    ],
  }),
]
export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'string',
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Link Set',
          name: 'linkSet',
          fields: [
            defineField({
              name: 'title',
              title: 'title',
              type: 'string',
            }),
            defineField({
              //TODO: for now menu item sets only allow a custom internal link
              name: 'slug',
              title: 'slug',
              type: 'string',
            }),
            defineField({
              name: 'menuItems',
              title: 'Menu Item SubList',
              type: 'array',
              of: links,
            }),
          ],
        }),
        ...links,
      ],
    }),
    defineField({
      name: 'footer',
      description:
        'This is a block of text that will be displayed at the bottom of the page.',
      title: 'Footer Info',
      type: 'array',
      of: [
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
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
