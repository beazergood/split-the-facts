import React from 'react'
import { Story, Meta } from '@storybook/react'
import { YearbookImage, YearbookImageProps } from '.'

export default {
  title: 'Components/YearbookImage',
  component: YearbookImage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<YearbookImageProps> = (args) => (
  <YearbookImage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  character: {}
}
