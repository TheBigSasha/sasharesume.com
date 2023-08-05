import Link from 'next/link'
import { STag } from '../styled/Basic'
import React from 'react'

export interface TagProps {
  tag: string
}

export const Tag: React.FC<TagProps> = ({ tag }) => {
  return <Link href={`/projects/category/${tag}`}><STag>
    {tag}
  </STag></Link>
}
