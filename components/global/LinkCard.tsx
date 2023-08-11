import { LinkCard, LinkCardIcon } from '../../types'
import { FaApple, FaArchive, FaDownload, FaEnvelope, FaFacebook, FaFacebookMessenger, FaGithub, FaGlobe, FaImdb, FaLinkedin, FaNpm, FaPhotoVideo, FaReddit, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'

export const getLinkCardIcon = (icon: LinkCardIcon) => {
  switch (icon) {
    case 'github':
      return (
        <FaGithub />
      )
    case 'linkedin':
      return (
        <FaLinkedin />
      )
    case 'download':
      return (
        <FaDownload/>
      )
    case 'youtube':
      return (
        <FaYoutube />
      )
    case 'appstore':
      return (
        <FaApple/>
      )
    case 'facebook':
      return (
        <FaFacebook />
      )
    case 'arxiv':
      return (
        <FaArchive />
      )
    case 'reddit':
      return (
        <FaReddit/>
      )
    case 'imdb':
      return (
        <FaImdb/>
      )
    case 'messenger':
      return (
        <FaFacebookMessenger/>
      )
    case 'photo':
      return (
        <FaPhotoVideo/>
      )
    case 'email':
      return (
        <FaEnvelope />
      )
    case 'npm':
      return (
        <FaNpm/>
      )
    default:
      return (
        <FaGlobe />
      )

  }
}

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 1rem;
`

const LinkCardContainer = styled.div<{color: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 1rem;
  transition: box-shadow 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 0 5px 0 ${props => props.color};
  }
`

const CardLink = styled.a`
  text-decoration: none;
  color: var(--text-color);
`

export const LinkCardRender: React.FC<LinkCard> = ({icon, href, title, color}) => {
  return (
    <CardLink href={href}>
    <LinkCardContainer color={color || '#49757e'}>
      <IconWrapper>
        {getLinkCardIcon(icon)}
      </IconWrapper>
        {title}
    </LinkCardContainer>
    </CardLink>

  )

}
