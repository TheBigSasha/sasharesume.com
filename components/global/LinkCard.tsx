import { LinkCard, LinkCardIcon } from '../../types'
import { FaGithub } from 'react-icons/fa'
import styled from 'styled-components'
import { SLink } from '../styled/Basic'

export const getLinkCardIcon = (icon: LinkCardIcon) => {
  switch (icon) {
    case 'github':
      return (
        <FaGithub />
      )
    default:
      return (
        <FaGithub />
      )

  }
}

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
      {getLinkCardIcon(icon)}
        {title}
    </LinkCardContainer>
    </SLink>

  )

}
