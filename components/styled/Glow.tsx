import styled from "styled-components"

import {  SImage, SImageBox } from "./Basic"

interface SImageGlowProps {
    glowColor: string
}

export const SImageBoxGlow = styled(SImageBox)<SImageGlowProps>`
    // :before {
    //     content: "";
    //     position: absolute;
    //     top: -2rem;
    //     left: -2rem;
    //     right: -2rem;
    //     bottom: -2rem;
    //     background: ${({ glowColor }) => glowColor};
    //     z-index: -1;
    //     filter: blur(10rem);
    // }
    overflow: visible;
    `

export const SImageGlow = styled(SImage)<SImageGlowProps>`
    filter: drop-shadow(0 0 10rem ${({ glowColor }) => glowColor});
`