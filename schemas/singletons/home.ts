import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
      defineField({
      name: 'menuItems',
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
        of: [
          defineArrayMember({
            title: "Reference",
            type: "reference",
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
            title: "Custom Internal link",
            type: "object",
            name: "internalLink",
            fields: [
              {
                name: "title",
                type: "string",
                title: "Title",
              },
              {
                name: "slug",
                type: "slug",
                title: "Slug",
                options: {
                  source: "title",
                },
              },
            ],
          }),
          defineArrayMember({
            title: "External link",
            type: "object",
            name: "externalLink",
            fields: [
              {
                name: "title",
                type: "string",
                title: "Title",
              },
              {
                name: "href",
                type: "url",
                title: "Url",
              },
            ],
          }),
        ],
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and the personal website subheader.',
      title: 'Description',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
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
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'showcaseProjects',
      title: 'Showcase projects',
      description:
        'These are the projects that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
