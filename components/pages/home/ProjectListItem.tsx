import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import type { ShowcaseProject } from 'types'

import {
  SImageWrapper,
  STag,
  STextBox,
  STextBoxOverview,
  STextBoxTags,
  STextBoxTitle,
  STextBoxWrapper,
} from '../../styled/Basic'
import { AnimListItem } from '../../styled/Animated'

interface ProjectProps {
  project: ShowcaseProject
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd } = props

  return (
    <AnimListItem odd={odd}>
      <SImageWrapper>
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="relative aspect-photo"
        />
      </SImageWrapper>
      <STextBoxWrapper>
        <TextBox project={project} />
      </STextBoxWrapper>
    </AnimListItem>
  )
}

function TextBox({ project }: { project: ShowcaseProject }) {
  return (
    <STextBox>
      <div>
        {/* Title */}
        <STextBoxTitle>{project.title}</STextBoxTitle>
        {/* Overview  */}
        <STextBoxOverview>
          <CustomPortableText value={project.overview} />
        </STextBoxOverview>
      </div>
      {/* Tags */}
      <STextBoxTags>
        {project.tags?.map((tag, key) => (
          <STag key={key}>{tag}</STag>
        ))}
      </STextBoxTags>
    </STextBox>
  )
}
