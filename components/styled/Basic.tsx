import Image from 'next/image'
import styled from 'styled-components'

// tailwind: bottom-0 w-full bg-white py-12 text-center md:py-20
export const SFooter = styled.footer`
  bottom: 0;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
  @media (min-width: 768px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`

// tailwind: sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 py-4 px-4 backdrop-blur md:py-5 md:px-16 lg:px-32
export const SHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem;
  background-color: rgba(255, 255, 255, 0.5);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  backdrop-filter: blur(10px);
  @media (min-width: 768px) {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

// Tailwind: `flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row ${
//         odd && 'border-t border-b xl:flex-row-reverse'
//       }`
export const SListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0.5rem;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    border-top: 1px solid var(--border-dark);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    ${(props) => (props.odd ? 'flex-direction: row-reverse' : '')};
  }
`

// Tailwind: w-full overflow-hidden rounded-[3px] bg-gray-50 ${classesWrapper}
export const SImageBox = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 0.75rem;
  background-color: var(--second-background-color);
  ${(props) => props.classesWrapper}
`

// Tailwind: absolute h-full w-full
export const SImage = styled(Image)`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center;
`

// Tailwind: w-full xl:w-9/12
export const SImageWrapper = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`

// Tailwind: flex xl:w-1/4
export const STextBoxWrapper = styled.div`
  display: flex;
  @media (min-width: 1024px) {
    width: 50%;
  }
`

// Tailwind: relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0
export const STextBox = styled.div`
  position: relative;
  margin-top: 0.5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
  @media (min-width: 1024px) {
    margin-top: 0;
  }
`

// mb-2 text-xl font-extrabold tracking-tight md:text-2xl
export const STextBoxTitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.025em;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

// font-serif text-gray-500
export const STextBoxOverview = styled.div`
  font-family: var(--font-serif);
  color: var(--gray-500);
`

//mt-4 flex flex-row gap-x-2 overflow-x-auto
export const STextBoxTags = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  overflow-x: auto;
`

//inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mr-1 whitespace-nowrap text-ellipsis
export const STag = styled.div`
  display: inline-block;
  background-color: var(--gray-200);
  border-radius: 9999px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 5rem;
  text-align: center;
  color: var(--gray-700);
`

export const SCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// mx-auto max-w-[100rem] rounded-md border
export const SShowcaseProjectWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 62.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

//space-y-20
export const SSpacing = styled.div`
  & > * + * {
    margin-top: 5rem;
  }
`

// flex min-h-screen flex-col bg-white text-black
export const SLayout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

// mt-20 flex-grow px-4 md:px-16 lg:px-32
export const SLayoutBody = styled.div`
  margin-top: 5rem;
  flex-grow: 1;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media (min-width: 1024px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`
