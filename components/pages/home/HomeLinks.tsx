import { STag } from 'components/styled/Basic'
import Link from 'next/link'
import styled from 'styled-components'
import { unifyMenuItems } from '../../../lib/sanity.links'
import { ExternalMenuItem, InternalMenuItem, MenuItem } from '../../../types'

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
  overflow-x: auto;
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
        // <Link key={item.href || ''} href={item.href}>
        <HLSTag key={item.title}>{item.title}</HLSTag>
        // </Links>
      ))}
    </HomeLinkContainer>
  )
}
