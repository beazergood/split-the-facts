import React from 'react'
import { Story, Meta } from '@storybook/react'
import { YearbookImage, YearbookImageThumb, YearbookImageProps } from '.'

export default {
  title: 'Components/YearbookImage',
  component: YearbookImage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const TemplateBig: Story<YearbookImageProps> = (args) => (
  <YearbookImage {...args} />
)
const TemplateSmall: Story<YearbookImageProps> = (args) => (
  <YearbookImageThumb {...args} />
)

export const Primary = TemplateBig.bind({})
Primary.args = {
  character: {
    slug: '',
    image: {
      url: ''
    },
    image_hover: {
      url: ''
    },
    showName: true,
    name: 'Dave Beazer'
  }
}
export const Secondary = TemplateSmall.bind({})
Secondary.args = {
  character: {
    slug: '',
    image: {
      url: ''
    },
    image_hover: {
      url: ''
    },
    showName: true,
    name: 'Dave Beazer'
  }
}
