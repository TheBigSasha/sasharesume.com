import SyntaxHighlighter from 'react-syntax-highlighter'
import React from 'react'
import {
  atomOneDark,
  atomOneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { SSecondaryButton } from '../styled/Basic'
import { FaCopy } from 'react-icons/fa'
import styled from 'styled-components'
import { PTh4 } from '../styled/PortableText'

interface RawCodeProps {
  code: string
}

type CodeProps = React.PropsWithChildren<RawCodeProps>

interface SyntaxHighlightProps {
  language: string
  code: string
  filename?: string
}

const CodeWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  width: 100%;
`

//TODO: IntelliJ Style wrap icons
export const SyntaxHighlight: React.FC<SyntaxHighlightProps> = ({
  language,
  code,
  filename,
}) => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  return (
    <CodeWrapper>
      {' '}
      <SSecondaryButton
        style={{
          width: 'min-content',
          position: 'absolute',
          right: '0.5rem',
          top: '0.5rem',
        }}
        onClick={() => {
          navigator.clipboard.writeText(code).then((r) => {})
        }}
      >
        <FaCopy /> Copy Code
      </SSecondaryButton>
      {filename && (
        <PTh4
          style={{
            width: 'max-content',
            position: 'absolute',
            left: '1rem',
            top: '1rem',
          }}
        >
          {filename}
        </PTh4>
      )}
      <SyntaxHighlighter
        language={language}
        style={isDarkMode ? atomOneDark : atomOneLight}
        customStyle={{
          textAlign: 'left',
          width: '100%',
          maxWidth: '100%',
          lineBreak: 'anywhere',
          overflowWrap: 'anywhere',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          fontSize: '85%',
          borderRadius: '1mm',
          backgroundColor: 'var(--gray-50)',
          padding: '2rem',
          paddingTop: '3rem',
          boxShadow: '0 0 0.5mm rgba(0, 0, 0, 0.2)',
          margin: '0.5mm 0 0.55mm',
        }}
        wrapLines={true}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </CodeWrapper>
  )
}
