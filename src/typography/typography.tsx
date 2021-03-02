import Text from 'antd/lib/typography/Text'
import TextParagraph from 'antd/lib/typography/Paragraph'
import * as React from 'react'
import styled from 'styled-components'

type TypographyProps = {
  strong?: boolean
  style?: any
}

const HeadlineText = styled(Text)`
  font-size: var(--font-24) !important;
  font-weight: 700;
`

const SubHeadlineText = styled(Text)`
  font-size: var(--font-18) !important;
  font-weight: ${({ strong }) => (strong ? 700 : 400)};
`

const ParagraphText = styled(TextParagraph)`
  font-size: var(--font-16) !important;
  color: var(--gray-400);
  font-weight: ${({ strong }) => (strong ? 700 : 400)};
`

const DescriptionText = styled(Text)`
  font-size: var(--font-14) !important;
  color: var(--gray-400);
  font-weight: ${({ strong }) => (strong ? 700 : 400)};
`

const SmallText = styled(Text)`
  font-size: var(--font-12) !important;
  color: var(--gray-400);
  font-weight: ${({ strong }) => (strong ? 700 : 400)};
`

const Headline: React.FC<TypographyProps> = (props) => {
  return <HeadlineText {...props} />
}

const SubHeadline: React.FC<TypographyProps> = (props) => {
  return <SubHeadlineText {...props} />
}

const Paragraph: React.FC<TypographyProps> = (props) => {
  return <ParagraphText {...props} />
}

const Description: React.FC<TypographyProps> = (props) => {
  return <DescriptionText {...props} />
}

const Small: React.FC<TypographyProps> = (props) => {
  return <SmallText {...props} />
}

export default {
  Headline,
  SubHeadline,
  Paragraph,
  Description,
  Small
}
