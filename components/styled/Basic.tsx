import { motion } from 'framer-motion'
import Image from 'next/image'
import styled from 'styled-components'

// tailwind: bottom-0 w-full bg-white py-12 text-center md:py-20
export const SFooter = styled.footer`
  bottom: 0;
  width: 100%;
  padding-top: var(--space-12);
  padding-bottom: var(--space-12);
  text-align: center;
  @media (min-width: 768px) {
    padding-top: var(--space-20);
    padding-bottom: var(--space-20);
  }
`
export const LogoWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  align-self: center;
  & > * {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

// tailwind: sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 py-4 px-4 backdrop-blur md:py-5 md:px-16 lg:px-32
export const SHeader = styled.header`
  position: sticky !important;
  top: 0;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-5);
  padding: 0.5rem;
  backdrop-filter: blur(10px);
  @media (min-width: 768px) {
    padding: 0.625rem 1rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

// Tailwind: `flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row ${
//         odd && 'border-t border-b xl:flex-row-reverse'
//       }`
export const SListItem = styled(motion.div)<{odd: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 5;
  border-radius: var(--rounded-md);
  padding: 0.5rem;
  margin: 0.5rem;
  transition: background-color 0.2s ease-in-out;
  background-color: var(--tpcard-background-color);
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: var(--card-background-color);
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 320;
    ${(props) => (props.odd ? 'flex-direction: row-reverse' : '')};
  }
`

// Tailwind: w-full overflow-hidden rounded-[3px] bg-gray-50 ${classesWrapper}
export const SImageBox = styled.div<{classesWrapper?: any}>`
  width: 100%;
  overflow: hidden;
  border-radius: var(--rounded-md);
  //background-color: var(--second-background-color);
  background-color: transparent;
  ${(props) => props.classesWrapper}
`

export const SEmbedBox = styled(SImageBox)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`

export const SBlogListItem = styled(SListItem)`
  @media (min-width: 1024px) {
    height: 320px;
  }
`

// Tailwind: absolute h-full w-full
export const SImage = styled(Image)`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: contain;
  object-position: center;
`

export const SImageTp = styled(SImage)`
  object-fit: contain;
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
  margin-top: var(--space-1);
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
  margin-bottom: var(--space-1);
  font-size: var(--text-xl);
  font-weight: var(--font-extrabold);
  letter-spacing: var(--tracking-tight);
  @media (min-width: 768px) {
    font-size: var(--text-2xl);
  }
`

// font-serif text-gray-500
export const STextBoxOverview = styled.div`
  font-family: var(--font-serif);
  color: var(--gray-700);
`

//mt-4 flex flex-row gap-x-2 overflow-x-auto
export const STextBoxTags = styled.div`
  margin-top: var(--space-2);
  display: flex;
  flex-direction: row;
  gap: var(--space-2);
  overflow-x: auto;
`

//inline-block bg-gray-200 rounded-full px-3 py-1 text-smtext-gray-700 mr-2 mb-2 mr-1 whitespace-nowrap text-ellipsis
export const STag = styled.div`
  display: inline-block;
  background-color: var(--gray-200);
  border-radius: 9999px;
  padding: var(--space-1) var(--space-2);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  margin-right: var(--space-1);
  margin-bottom: var(--space-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: var(--space-24);
  width: max-content;
  max-width: var(--space-56);
  text-align: center;
  color: var(--gray-700);
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: var(--accent);
    color: var(--white);
  }
`

export const SCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// mx-auto max-w-[100rem] rounded-md border
export const SShowcaseProjectWrapper = styled(motion.div)`
  margin-left: auto;
  margin-right: auto;
  max-width: 62.5rem;
  border-radius: 0.75rem;
  & > * + * {
    border-top: 1px solid var(--gray-300);
  }
`

//space-y-20
export const SSpacing = styled.div`
  & > * + * {
    margin-top: 5rem;
  }
`

// flex min-h-screen flex-col bg-white text-black
export const SLayout = styled.div<{constrainWidth: boolean}>`
  display: flex;
  min-height: 100vh;
  max-width: 100vw;
  flex-direction: column;
  ${(props) => (props.constrainWidth ? 'max-width: 1200px' : '')};
`

export const SBackground = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  z-index: -1;
`

// mt-20 flex-grow px-4 md:px-16 lg:px-32
export const SLayoutBody = styled.div`
  margin-top: 5rem;
  flex-grow: 1;
  padding-left: 1rem;
  z-index: 10;
  padding-right: 1rem;
  max-width: 100vw;
  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media (min-width: 1024px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`

export const SNavHeaderWrapper = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 9799;
`

// `${centered ? 'text-center' : 'w-5/6 lg:w-3/5'}`
export const SHeaderWrapper = styled.div<{centered: boolean}>`
  z-index: 9799;
  ${(props) => (props.centered ? 'text-align: center' : 'width: 83.333333%')};
  @media (min-width: 1024px) {
    ${(props) => (props.centered ? 'text-align: center' : 'width: 100%')};
  }
`

// text-sm font-bold text-gray-600
export const SHeaderText = styled.div`
  font-size: var(--text-sm);
  line-height: var(--lineheight-sm);
  font-weight: 700;
  color: var(--gray-700);
  // characters should be vertically aligned to centerline
  vertical-align: super;
`

export const SHeaderBackButton = styled(SHeaderText)`
  padding: 0 0.5rem 0 0;
  &:hover {
    background-color: var(--gray-100);
    border-radius: var(--rounded-full);
    transition: 0.4s ease-in-out;
    width: fit-content;
  }
`

// text-3xl font-extrabold tracking-tight md:text-5xl
export const SHeaderTitle = styled.div`
  font-size: var(--text-2xl);
  line-height: var(--lineheight-2xl);
  font-weight: 800;
  letter-spacing: var(--tracking-tight);
  @media (min-width: 768px) {
    font-size: var(--text-3xl);
    line-height: var(--lineheight-3xl);
  }
`
//mt-4 font-serif text-xl text-gray-600 md:text-2xl
export const SHeaderDescription = styled.div`
  margin-top: var(--space-2);
  font-family: var(--font-serif);
  font-size: var(--text-md);
  line-height: var(--lineheight-md);
  color: var(--gray-600);
  @media (min-width: 768px) {
    font-size: var(--text-lg);
    line-height: var(--lineheight-lg);
  }
`

// absolute left-0 w-screen border-t
export const SHeaderBorder = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  border-top: 1px solid var(--gray-300);
`

//text-md flex flex-row flex-wrap md:text-lg
export const STagGroup = styled.div`
  font-size: var(--text-xs);
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  width: calc(100% - 2rem);
  flex-direction: column;
  max-height: var(--space-6);
  @media (min-width: 768px) {
    font-size: var(--text-md);
  }
`

export const STags = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: max-content;
`

export const SProjectDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`

export const SGap = styled.div`
  height: 1rem;
`

export const SProjectLinkButton = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background: var(--accent);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-size: var(--text-xs);
  font-weight: 700;
  line-height: var(--lineheight-xs);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  min-width: 8rem;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  &:hover {
    transition: 0.4s ease-in-out;
  }
  &:active {
    transition: 0.4s ease-in-out;
  }
  gap: 0.5rem;
  width: fit-content;
`

export const SSecondaryButton = styled(SProjectLinkButton)`
  background: var(--gray-200);
  color: var(--gray-700);
  &:hover {
    background: var(--gray-300);
    border: 1px solid var(--gray-700);
  }
  &:active {
    background: var(--gray-300);
    border: 1px solid var(--gray-700);
  }
`
//text-xs md:text-sm
export const STagText = styled.div`
  font-size: var(--text-xs);
  @media (min-width: 768px) {
    font-size: var(--text-xs);
  }
`

//p-3 lg:p-4
export const SProjectDetailsGridBox = styled.div`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  @media (min-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`

// mb-20 space-y-6
export const SProjectList = styled.div`
  margin-bottom: 5rem;
  & > * + * {
    margin-top: 1.5rem;
  }
`

//rounded-md border
export const SProjectBox = styled.div`
  border-radius: var(--rounded-md);
  max-width: 1200px;
  width: 100%;
`

export const SHugeGap = styled.div`
  height: 5rem;
`

export const SMidGap = styled.div`
  height: 3rem;
`

export const SHLine = styled.hr`
  border: 0;
  height: 1px;
  background-color: var(--gray-300);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

//grid grid-cols-1 divide-y divide-inherit lg:grid-cols-4 lg:divide-y-0 lg:divide-x
export const SProjectDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid var(--gray-300);
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 0;
    border-right: 1px solid var(--gray-300);
    & > * + * {
      border-left: 1px solid var(--gray-300);
    }
  }

  @media (max-width: 1023px) {
    & > * + * {
      border-top: 1px solid var(--gray-300);
    }
  }
`

//underline transition hover:opacity-50
export const SLink = styled.a`
  text-decoration: underline;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`

export const SProjectListItemTextAndTag = styled.span`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 100%;
`

export const SResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 2rem;
  grid-auto-rows: minmax(100px, auto);
`

export const SLeftRight = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
`

export const SEmbedHeader = styled(SLeftRight)`
  margin-bottom: 0.5rem;
  & > * {
    margin-bottom: 0;
  }
  align-items: center;
`
