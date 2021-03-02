import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Typography from '../typography/typography'
import 'antd/dist/antd.css'
import '../index.css'

// export default {
//   title: 'Example/Typography',
//   component: Typography.Headline,
//   argTypes: {
//     color: { control: 'color' }
//   }
// } as Meta

//@ts-ignore
export default {
  title: 'Example/Typography',
  component: Typography,
  argTypes: {
    color: { control: 'color' }
  }
} as Meta

export const Headline: React.VFC<any> = (props) => (
  <Typography.Headline {...props}>This is Headline</Typography.Headline>
)

export const Small: React.VFC<any> = (props) => (
  <Typography.Small {...props}>This is Small text</Typography.Small>
)

// const Template: Story = (args) => (
//   <Typography.Headline {...args}>This is headline</Typography.Headline>
// )

// export const Headline = Template.bind({})
// Headline.args = {
//   color: 'red'
// }
