import styled from 'styled-components'

export const PTImage = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const PTParagraph = styled.p`
  font-size: 1rem;
`

export const PTImageCaption = styled.caption`
  font-size: 1rem;
  font-style: italic;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  max-width: clamp(66%, 350px, 100%);
`

export const PTh1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  font-family: var(--font-sans);
`

export const PTh2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: var(--font-sans);
`

export const PTh3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  font-family: var(--font-sans);
`

export const PTh4 = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-sans);
`

export const PTblockquote = styled.blockquote`
  font-size: 0.9rem;
  font-style: italic;
  font-weight: 500;
  margin: 1rem;
  color: var(--gray-700);
  margin-bottom: 2rem;
  font-family: var(--font-sans);
  padding-left: 1rem;
  border-left: 0.15rem solid var(--accent);
`

export const PTli = styled.li`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 0;
  font-family: var(--font-serif);
`

export const PTul = styled.ul`
  & > li {
    list-style: disc;
    font-family: var(--font-serif);
  }
`

export const PTol = styled.ol``
