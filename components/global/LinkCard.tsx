import { LinkCard, LinkCardIcon } from '../../types'
import { FaArchive, FaEnvelope, FaFacebook, FaFacebookMessenger, FaGithub, FaGlobe, FaLinkedin, FaPhotoVideo, FaReddit, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'
import { SLink } from '../styled/Basic'

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
    case 'youtube':
      return (
        <FaYoutube />
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

const LinkCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--card-bg);
  border-radius: var(--card-border);
  padding: 1rem;
`

export const LinkCardRender: React.FC<LinkCard> = ({icon, href, title, color}) => {
  return (
    <SLink href={href} color={color}>
    <LinkCardContainer>
      <IconWrapper>
        {getLinkCardIcon(icon)}
      </IconWrapper>
        {title}
    </LinkCardContainer>
    </SLink>

  )

}
