/*
 * This file was automatically generated by thebigsasha's Sanity Codegen. (http://thebigsasha.github.io/sanity_config_creator/)
 * Read more at the link above.
 */
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'object',
  name: 'LinkCard',
  title: 'Link Card',
  description: 'A card with a link and an icon',
  fields: [
    defineField({
      type: 'string',
      name: 'icon',
      title: 'Icon',
      description:
        'The icon to send to the icon resolver. Any react-icons icon is valid.',
      options: {
        list: [
          { title: 'Instagram', value: 'instagram' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'ArXiv', value: 'arxiv' },
          { title: 'GitHub', value: 'github' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Threads', value: 'threads' },
          { title: 'App Store', value: 'appstore' },
          { title: 'Google Play', value: 'googleplay' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Messenger', value: 'messenger' },
          { title: 'Email', value: 'email' },
          { title: 'Photo', value: 'photo' },
          { title: 'Web', value: 'web' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'MySpace', value: 'myspace' },
          { title: 'XDADevelopers', value: 'xda' },
          { title: 'Reddit', value: 'reddit' },
          { title: 'NPM', value: 'npm' },
          { title: 'IMDB', value: 'imdb' },
        ],
      },
    }),
    defineField({
      type: 'url',
      name: 'href',
      title: 'Link',
      description: 'Link to the referred content',
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The text displayed below the icon',
    }),
    defineField({
      type: 'string',
      name: 'color',
      title: 'Color',
      description: 'The accent color of this link',
    }),
  ],
})
