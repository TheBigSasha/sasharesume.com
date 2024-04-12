import styled from 'styled-components'

import { SImage, SImageBox, SProjectLinkButton } from './Basic'

interface SImageGlowProps {
  glowColor: string
}

export const SImageBoxGlow = styled(SImageBox) <SImageGlowProps>`
  overflow: visible !important;
`

export const SImageGlow = styled(SImage) <SImageGlowProps>`
  filter: drop-shadow(0 0 100px ${({ glowColor }) => glowColor});
  // the translate3d is to force safari to use GPU acceleration
  transform: translate3d(0, 0, 0);

  //TODO: multipoint glow https://unused-css.com/tools/gradient-generator
`

interface SProjectLinkButtonProps {
  glowColor: string
  foregroundColor: string
}

export const SProjectLinkButtonGlow = styled(SProjectLinkButton) <SProjectLinkButtonProps>`
  background: ${({ glowColor }) => glowColor};
  color: ${({ foregroundColor }) => foregroundColor};
`
