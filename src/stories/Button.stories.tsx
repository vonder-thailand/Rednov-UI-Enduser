import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '../button/Button'
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
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'success', 'danger', 'info', 'warning', 'link']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large']
      }
    }
  }
} as Meta

export const Basic: React.VFC<any> = (props) => (
  <div>
    <h3>Choose button type</h3>
    <Button {...props}>Button Primary</Button>
  </div>
)

// export const Primary: React.VFC<any> = (props) => (
//   <Button {...props}>Button Primary</Button>
// )

// export const Success: React.VFC<any> = (props) => (
//   <Button {...props}>Button Success</Button>
// )
