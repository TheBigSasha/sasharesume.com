import { CustomPortableText } from 'components/shared/CustomPortableText'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'
import {
  SHeaderBackButton,
  SHeaderDescription,
  SHeaderTitle,
  SHeaderWrapper,
} from '../styled/Basic'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props
  if (!description && !title) {
    return null
  }
  return (
    <SHeaderWrapper centered={centered}>
      {/* Title */}
      {!centered && (
        <Link href="/">
          <SHeaderBackButton>
            <FaChevronLeft /> Back to gallery
          </SHeaderBackButton>
        </Link>
      )}

      {title && (
        <SHeaderTitle className={centered ? 'textTrackSweep' : ''}>
          {title}
        </SHeaderTitle>
      )}
      {/* Description */}
      {description && (
        <SHeaderDescription>
          <CustomPortableText value={description} />
        </SHeaderDescription>
      )}
    </SHeaderWrapper>
  )
}
