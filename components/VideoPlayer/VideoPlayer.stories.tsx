import React from 'react'
import { Story, Meta } from '@storybook/react'
import { VideoPlayer, VideoPlayerProps } from './'

export default {
  title: 'Components/VideoPlayer',
  component: VideoPlayer,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<VideoPlayerProps> = (args) => <VideoPlayer {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  logoFill: '#fe0',
  cursiveTitle: 'test'
}
