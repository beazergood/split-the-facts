import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Footer, FooterProps } from '.'

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  logoFill: '#fe0',
  footerFill: '#94A661'
}
