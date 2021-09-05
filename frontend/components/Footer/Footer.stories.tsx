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

export const Light = Template.bind({})
Light.args = {
  theme: {
    logoFill: '#94A661',
    bgFill: '#E9F7CA',
    buttonFill: '#EAEFB1',
    iconsFill: '#94A661',
    linkColour: '#94A661',
    theme: 'light'
  }
}

export const Dark = Template.bind({})
Dark.args = {
  theme: {
    logoFill: '#B3525E',
    bgFill: '#8D3F48',
    buttonFill: '#B3525E',
    iconsFill: '#8D3F48',
    linkColour: '#fefefe',
    theme: 'light'
  }
}
