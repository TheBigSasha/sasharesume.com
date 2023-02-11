import { CustomPortableText } from 'components/shared/CustomPortableText'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'
import { SHeaderDescription, SHeaderText, SHeaderTitle, SHeaderWrapper } from '../styled/Basic'

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
    <SHeaderWrapper centered>
      {/* Title */}
      {!centered && (
        <Link href="/">
          <SHeaderText>
            <FaChevronLeft className="inline-block" /> Back to gallery
          </SHeaderText>
        </Link>
      )}

      {title && (
        <SHeaderTitle>
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
