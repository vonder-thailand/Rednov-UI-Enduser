import Text from 'antd/lib/typography/Text'
import TextParagraph from 'antd/lib/typography/Paragraph'
import TextLink from 'antd/lib/typography/Link'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import styled, { css } from 'styled-components'

const getColor = css`
  color: ${({ color }: any) => color && `${color} !important`};
`

const getColorWithDefaultColor = css`
  color: ${({ color }: any) =>
    color ? `${color} !important` : `var(--gray-400)`};
`

const getFontWeight = css`
  font-weight: ${({ strong }: any) => (strong ? 700 : 400)};
`

const HeadlineText = styled(Title)<any>`
  font-size: var(--font-24) !important;
  font-weight: 700;
  ${getColor}
`

const SubHeadlineText = styled(TextParagraph)<any>`
  font-size: var(--font-18) !important;
  ${getFontWeight};
  ${getColor}
`

const ParagraphText = styled(TextParagraph)<any>`
  font-size: var(--font-16) !important;
  ${getColorWithDefaultColor}
  ${getFontWeight};
`

const DescriptionText = styled(TextParagraph)<any>`
  font-size: var(--font-14) !important;
  ${getColorWithDefaultColor};
  ${getFontWeight};
`

const SmallText = styled(Text)<any>`
  font-size: var(--font-12) !important;
  ${getColorWithDefaultColor};
  ${getFontWeight};
`

const LinkText = styled(TextLink)<any>``

const Headline: React.FC<any> = (props) => {
  return <HeadlineText {...props} />
}

const SubHeadline: React.FC<any> = (props) => {
  return <SubHeadlineText {...props} />
}

const Paragraph: React.FC<any> = (props) => {
  return <ParagraphText {...props} />
}

const Description: React.FC<any> = (props) => {
  return <DescriptionText {...props} />
}

const Small: React.FC<any> = (props) => {
  return <SmallText {...props} />
}

const Link: React.FC<any> = (props) => {
  return <LinkText {...props} />
}

const Typography = {
  Headline,
  SubHeadline,
  Paragraph,
  Description,
  Small,
  Link
}

export default Typography
