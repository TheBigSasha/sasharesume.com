import Link from 'next/link'
import { STag } from '../styled/Basic'
import React from 'react'
import { resolveHref } from 'lib/sanity.links'

export interface TagProps {
  tag: string
  tagType?: 'tag' | 'blogTag'
}

export const Tag: React.FC<TagProps> = ({ tag, tagType = 'tag'}) => {
  return <Link href={resolveHref(tagType, tag)}><STag>
    {tag}
  </STag></Link>
}
