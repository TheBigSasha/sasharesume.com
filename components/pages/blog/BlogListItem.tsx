import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import { PerspectiveImage } from 'tbsui'
import type { BlogPostPayload } from 'types'

import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { Tag } from '../../shared/Tag'
import {
  SBlogListItem,
  SImageWrapper,
  STextBox,
  STextBoxOverview,
  STextBoxTags,
  STextBoxTitle,
  STextBoxWrapper,
} from '../../styled/Basic'

interface BlogProps {
  project: BlogPostPayload
  odd: number
}

export function BlogListItem(props: BlogProps) {
  const { project, odd } = props
  const width = useMediaQuery('(min-width: 1024px)')

  const imageComponent =
    width && project.usePerspective ? (
      <PerspectiveImage
        style={{ height: '320px', perspective: 1000 }}
        amount={18}
        flattenOnHover={true}
        image={
          <ImageBox
            image={project.coverImage}
            alt={`Cover image from ${project.title}`}
            classesWrapper="relative aspect-photo height-320"
          />
        }
        direction={odd ? 'right' : 'left'}
      />
    ) : (
      <ImageBox
        glow
        image={project.coverImage}
        alt={`Cover image from ${project.title}`}
        classesWrapper="relative aspect-photo height-320"
      />
    )

  return (
    <SBlogListItem odd={odd} style={{ cursor: 'pointer' }}>
      <SImageWrapper>{imageComponent}</SImageWrapper>
      <STextBoxWrapper>
        <TextBox project={project} />
      </STextBoxWrapper>
    </SBlogListItem>
  )
}

function TextBox({ project }: { project: BlogPostPayload }) {
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
          <Tag key={key} tag={tag} tagType="blogTag"></Tag>
        ))}
      </STextBoxTags>
    </STextBox>
  )
}
