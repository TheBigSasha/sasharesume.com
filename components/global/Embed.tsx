import { Embed } from "types";
import styled from "styled-components";
import { SEmbedBox, SEmbedHeader, SProjectLinkButton } from "components/styled/Basic";
import { PTImageCaption, PTh3 } from "components/styled/PortableText";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const IFrame = styled.iframe`
    border: none;
    border-radius: var(--border-radius);
    margin: 0 auto;
    display: block;
    background: transparent;
    background-color: transparent;
`

const getHeight = (displayMode: 'fixed-sm' | 'fixed-md' | 'fixed-lg' | 'fill') => {
    switch(displayMode) {
        case 'fixed-sm':
            return '300px'
        case 'fixed-md':
            return '500px'
        case 'fixed-lg':
            return '700px'
        case 'fill':
            return '80vh'
        default:
            return '300px'
    }
}


export const EmbedRender: React.FC<Embed> = (props) => {
    //TODO: implement collabsability
    return<>
        <span>
            <SEmbedHeader>
            <PTh3>{props.title}</PTh3>
            <Link href={props.hrefAction}>
                <SProjectLinkButton>
                    {props.textAction}
                    <FaExternalLinkAlt/>
                </SProjectLinkButton>
            </Link>
            </SEmbedHeader>
        <SEmbedBox>
            <IFrame allowTransparency src={props.href} width="100%" height={
                getHeight(props.displayMode)
            } allowFullScreen></IFrame>
                        <PTImageCaption>{props.summary}</PTImageCaption>
            </SEmbedBox>
            </span>
        </>
}