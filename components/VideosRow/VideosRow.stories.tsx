import React from 'react'
import { Story, Meta } from '@storybook/react'
import { VideosRow, VideosRowProps } from '.'

export default {
  title: 'Components/VideosRow',
  component: VideosRow,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<VideosRowProps> = (args) => <VideosRow {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  videos: '#fe0',
  group: '#94A661'
}
