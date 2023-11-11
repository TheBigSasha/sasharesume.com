import { ExternalMenuItem, InternalMenuItem, MenuItem } from '../../../types'
import { unifyMenuItems } from '../../../lib/sanity.links'
import styled from 'styled-components'
import Link from 'next/link'
import { STag } from 'components/styled/Basic'

interface HomeLinksProps {
  menuItems: (ExternalMenuItem | MenuItem | InternalMenuItem)[]
}

const HomeLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation-duration: 1s;
  animation-name: fadeIn;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-delay: 0.6s;
`

const HLSTag = styled(STag)`
  margin-top: 0;
  background-color: var(--gray-50);
  color: var(--gray-700);
  &:hover {
    background-color: var(--gray-200);
    color: var(--gray-800);
  }
`

export const HomeLinks: React.FC<HomeLinksProps> = ({ menuItems: mnuis }) => {
  const menuItems = unifyMenuItems(mnuis)

  return (
    <HomeLinkContainer>
      {menuItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <HLSTag>{item.title}</HLSTag>
        </Link>
      ))}
    </HomeLinkContainer>
  )
}
