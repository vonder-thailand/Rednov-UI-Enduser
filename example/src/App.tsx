//@ts-ignore
import React from 'react'

import { Typography, Button } from 'rednov-ui'
import 'rednov-ui/dist/index.css'

const App = () => {
  return (
    <div style={{ margin: '18px' }}>
      <Typography.Headline>This is Headline</Typography.Headline>
      <Button type='default'>Default Button</Button>
      <br />
      <Button type='primary'>Primary Button</Button>
      <br />
      <Button type='success'>Success Button</Button>
      <br />
    </div>
  )
}

export default App
