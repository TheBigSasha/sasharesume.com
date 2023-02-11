import { CustomPortableText } from 'components/shared/CustomPortableText'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'

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
    <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'}`}>
      {/* Title */}
      {!centered && (
        <Link href="/">
          <p className="text-sm font-bold text-gray-600">
            <FaChevronLeft className="inline-block" /> Back to gallery
          </p>
        </Link>
      )}

      {title && (
        <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </div>
      )}
      {/* Description */}
      {description && (
        <div className="mt-4 font-serif text-xl text-gray-600 md:text-2xl">
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}
