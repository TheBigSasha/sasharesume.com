import { FC } from 'react'

import Image from 'next/image'
import { PopupMessage } from 'tbsui-ssr'
import { SGap, SLeftRight } from 'components/styled/Basic'

export const UnderContstruction: FC = () => <SLeftRight>
  <PopupMessage label={"Under Construction"} variant={"WARNING"} style={{maxWidth: 750, justifyContent: "left", textAlign: "left"}}>
  <p>This page is under construction. Expect the unexpected.</p>
</PopupMessage>
  <SGap />
</SLeftRight>
