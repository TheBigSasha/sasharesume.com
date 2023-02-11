import { CustomPortableText } from 'components/shared/CustomPortableText'
import React from 'react'
import { PortableTextBlock } from 'sanity'

import { SFooter } from '../../components/styled/Basic'

export function Footer({ footer }: { footer: PortableTextBlock[] }) {
  return (
    <SFooter>
      {footer && (
        <CustomPortableText
          paragraphClasses="text-md md:text-xl"
          value={footer}
        />
      )}
    </SFooter>
  )
}
