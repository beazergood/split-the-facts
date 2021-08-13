import React from 'react'
import { Story, Meta } from '@storybook/react'
import { IntroSection, IntroSectionProps } from '.'

export default {
  title: 'Home/IntroSection',
  component: IntroSection,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<IntroSectionProps> = (args) => <IntroSection {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true
}
