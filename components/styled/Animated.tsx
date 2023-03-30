import React from 'react'

import { SListItem, SShowcaseProjectWrapper } from './Basic'

export const AnimShowcaseProjectWrapper: React.FC<
  React.PropsWithChildren<{}>
> = ({ children }) => {
  const variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.125,
        duration: 0.8,
      },
    },
  }
  return (
    <SShowcaseProjectWrapper
      variants={variants}
      initial={'hidden'}
      animate={'show'}
    >
      {children}
    </SShowcaseProjectWrapper>
  )
}

export const AnimListItem: React.FC<React.PropsWithChildren<any>> = (props) => {
  const { children } = props
  const listItemVars = {
    hidden: { opacity: 0, translateY: 100, scale: 0.8 },
    show: { opacity: 1, translateY: 0, scale: 1 },
  }
  return (
    <SListItem variants={listItemVars} {...props}>
      {children}
    </SListItem>
  )
}
