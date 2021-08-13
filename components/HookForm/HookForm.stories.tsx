import React from 'react'
import { Story, Meta } from '@storybook/react'
import { HookForm } from './'

export default {
  title: 'Components/HookForm',
  component: HookForm
} as Meta

const Template: Story = (args) => <HookForm {...args} />

export const Primary = Template.bind({})
Primary.args = {
  fill: '#ff0000'
}
