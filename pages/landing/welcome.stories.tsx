import React from 'react'
import { Story, Meta } from '@storybook/react'

import LandingHome, { LandingHomeProps } from './welcome'

export default {
  title: 'Pages/LandingHome',
  component: LandingHome,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<LandingHomeProps> = (args) => <LandingHome {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}
