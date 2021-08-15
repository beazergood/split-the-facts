import React from 'react'
import { Story, Meta } from '@storybook/react'
import { HookForm } from './'

export default {
  title: 'Components/HookForm',
  component: HookForm
} as Meta

const Template: Story = (args) => {
  return (
    <div className="bg-popstar">
      <HookForm {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  fill: '#8D3F48'
}
