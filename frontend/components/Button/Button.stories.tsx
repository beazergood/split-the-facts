import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  fill: '#fe0',
  label: ' Sign up'
}
