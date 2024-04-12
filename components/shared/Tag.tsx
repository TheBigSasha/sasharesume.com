import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import React from 'react'
import { STag } from '../styled/Basic'

export interface TagProps {
  tag: string
  tagType?: 'tag' | 'blogTag'
}

export const Tag: React.FC<TagProps> = ({ tag, tagType = 'tag' }) => {
  return (
    <Link href={resolveHref(tagType, tag)}>
      <STag>{tag}</STag>
    </Link>
  )
}
