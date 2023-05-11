import React, { createContext, useContext, useState } from 'react'

interface ContextType {
  pageAnimation: boolean
  setPageAnimation: React.Dispatch<React.SetStateAction<boolean>>
}

export const PageAnimationContext = createContext<ContextType | undefined>(
  undefined
)

export const PageAnimationProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [pageAnimation, setPageAnimation] = useState<boolean>(false)

  return (
    <PageAnimationContext.Provider value={{ pageAnimation, setPageAnimation }}>
      {children}
    </PageAnimationContext.Provider>
  )
}

export function usePageAnimation() {
  const context = useContext(PageAnimationContext)
  if (context === undefined) {
    throw new Error(
      'usePageAnimation must be used within a pageAnimationProvider'
    )
  }
  return context
}
