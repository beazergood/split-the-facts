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
  cursiveTitle: 'Questions from',
  title: 'The Hallporters Chair',
  embedId: 'xJBlLgBNYhc',
  thumbnailImg:
    'https://res.cloudinary.com/split-the-facts/image/upload/v1627550229/outstanding_english_georgian_hall_porters_chair_1_eeffde1663.jpg'
}
