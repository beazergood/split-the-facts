import React from 'react'
import { Story, Meta } from '@storybook/react'
import { HookForm, HookFormProps } from './'

export default {
  title: 'Components/HookForm',
  component: HookForm
} as Meta

const Template: Story<HookFormProps> = (args) => {
  return (
    <div className="bg-popstar">
      <HookForm {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  theme: 'light'
}
