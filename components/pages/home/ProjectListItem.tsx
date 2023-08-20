import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import type { ShowcaseProject } from 'types'

import {
  SImageWrapper,
  SListItem, SProjectListItemTextAndTag,
  STag,
  STextBox,
  STextBoxOverview,
  STextBoxTags,
  STextBoxTitle,
  STextBoxWrapper
} from '../../styled/Basic'
import { PerspectiveImage } from 'tbsui'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { Tag } from '../../shared/Tag'

interface ProjectProps {
  project: ShowcaseProject
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd } = props
  const width = useMediaQuery('(min-width: 1024px)')

  const imageComponent = width && project.usePerspective ?  <PerspectiveImage style={{height: "320px", perspective: 1000}} amount={18} flattenOnHover={true} image={ <ImageBox
    image={project.coverImage}
    alt={`Cover image from ${project.title}`}
    classesWrapper="relative aspect-photo height-320"
  />} direction={odd ? "right" : "left"}/> : <ImageBox
    image={project.coverImage}
    alt={`Cover image from ${project.title}`}
    classesWrapper="relative aspect-photo height-320"
  />;

  return (
    <SListItem odd={odd} style={{cursor: 'pointer'}}>
      <SImageWrapper>
        {imageComponent}
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
          <Tag key={key} tag={tag}></Tag>
        ))}
      </STextBoxTags>

    </STextBox>
  )
}
