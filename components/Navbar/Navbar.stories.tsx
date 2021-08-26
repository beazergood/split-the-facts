import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Navbar, NavbarProps } from '.'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  theme: {
    logoFill: '#B3525E',
    navBtnFill: '#B3525E'
  }
}
