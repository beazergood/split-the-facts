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
  primary: true,
  intro: `A world of characters and impersonations that through comedy convey the fundamental concepts detailed in my unpublished book: Split! - The West at War with Itself.

  If you like my content and want to keep up to date with what I'm working on then please sign up to my newsletter below and share the website with those who you think will enjoy.`
}
