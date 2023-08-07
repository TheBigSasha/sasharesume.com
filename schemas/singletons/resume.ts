
/*
    * This file was automatically generated by thebigsasha's Sanity Codegen. (http://thebigsasha.github.io/sanity_config_creator/)
    * Read more at the link above.
*/
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: "ResumeDownload",
  title: "Resume Download",
  description: "Page for downloading PDF resume.",
  fields: [
    defineField({
      type: 'file',
      name: "resumePDF",
      title: "Resume PDF File",
      description: "The file for the resume to give people to download.",
    }),
  ],
});