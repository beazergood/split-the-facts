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
  videos: [
    {
      id: 1,
      thumbnail_image: {
        url: '/images/outstanding-english-georgian-hall-porters-chair-1.jpeg'
      },
      published: new Date(),
      title: 'Test 123'
    },
    {
      id: 2,
      thumbnail_image: {
        url: '/images/outstanding-english-georgian-hall-porters-chair-1.jpeg'
      },
      published: new Date(),
      title: 'Test 1234'
    },
    {
      id: 3,
      thumbnail_image: {
        url: '/images/outstanding-english-georgian-hall-porters-chair-1.jpeg'
      },
      published: new Date(),
      title: 'Test 12345'
    },
    {
      id: 4,
      thumbnail_image: {
        url: '/images/outstanding-english-georgian-hall-porters-chair-1.jpeg'
      },
      published: new Date(),
      title: 'Test 1234'
    },
    {
      id: 5,
      thumbnail_image: {
        url: '/images/outstanding-english-georgian-hall-porters-chair-1.jpeg'
      },
      published: new Date(),
      title: 'Test 12345'
    }
  ],
  group: {
    title: 'title'
  }
}
