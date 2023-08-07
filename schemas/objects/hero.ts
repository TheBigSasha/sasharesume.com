
/*
    * This file was automatically generated by thebigsasha's Sanity Codegen. (http://thebigsasha.github.io/sanity_config_creator/)
    * Read more at the link above.
*/
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: "Hero",
  title: "Hero Banner",
  description: "A banner to showcase something -- what to show off is up to you!",
  fields: [
    defineField({
      type: 'string',
      name: "headline",
      title: "Headline",
      description: "The most prominent text of the hero.",
    }),
    defineField({
      type: 'array',
      name: "body",
      title: "Body",
      description: "The body of the hero, placed below the headline with subtitle / caption level prominence.",
      of: [{type: 'block'}],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      type: 'image',
      name: "banner",
      title: "Banner",
      description: "The image which is behind the text, filling the hero view.",
      options: {
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description:
            'Alternative text for screenreaders. Falls back on caption if not set',
          validation: (rule) => rule.required().max(255).min(10),
        }),
      ],
    }),
    defineField({
      type: 'string',
      name: "layout",
      title: "Layout",
      description: "How the banner is laid out.",
      options: {
        list: [
          {title: 'Left', value: 'left'}, {title: 'Right', value: 'right'}, {title: 'Center', value: 'center'}],
      },
    }),
    defineField({
      type: 'object',
      name: "cta",
      title: "Call to Action",
      description: "An actionable button for the hero.",
      fields: [
        defineField({
          type: 'url',
          name: "href",
          title: "Link (external)",
          description: "Link (external)",
        }),
        defineField({
          type: 'reference',
          name: "to",
          title: "Link (internal)",
          description: "Link (internal)",
          weak: false,
          to: [{type: 'page'}, {type: 'project'}],
        }),
        defineField({
          type: 'string',
          name: "title",
          title: "Title",
          description: "The text in the CTA",
        }),
      ],
    }),
  ],
});