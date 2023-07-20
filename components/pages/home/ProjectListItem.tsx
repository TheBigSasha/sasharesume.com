import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import type { ShowcaseProject } from 'types'

import {
  SImageWrapper,
  SListItem,
  STag,
  STextBox,
  STextBoxOverview,
  STextBoxTags,
  STextBoxTitle,
  STextBoxWrapper,
} from '../../styled/Basic'
import { PerspectiveImage } from 'tbsui'

interface ProjectProps {
  project: ShowcaseProject
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd } = props

  return (
    <SListItem odd={odd}>
      <SImageWrapper>
        <PerspectiveImage style={{height: 320, perspective: 1000}} amount={30} flattenOnHover={true} image={ <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="relative aspect-photo"
        />} direction={odd ? "right" : "left"}/>
      </SImageWrapper>
      <STextBoxWrapper>
        <TextBox project={project} />
      </STextBoxWrapper>
    </SListItem>
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
