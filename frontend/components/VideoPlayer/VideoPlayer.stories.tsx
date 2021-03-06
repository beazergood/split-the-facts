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

const Template: Story<VideoPlayerProps> = (args) => {
  return (
    <div className="bg-popstar">
      <VideoPlayer {...args} />
    </div>
  )
}
export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  cursiveTitle: 'Questions from',
  title: 'The Hallporters Chair',
  embedId: 'xJBlLgBNYhc',
  thumbnailImg:
    'https://res.cloudinary.com/split-the-facts/image/upload/v1628605413/photo_sketch_merge_732x431_feathered_95f2210239.png'
}
