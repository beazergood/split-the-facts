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

export const Open = Template.bind({})
Open.args = {
  group: {
    title: 'Videos',
    action: 'open'
  },
  videos: [
    {
      id: 1,
      thumbnail_image: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1629016327/Screenshot_2021_08_15_at_09_31_34_069224e400.png'
      },
      embed_url: 'xJBlLgBNYhc',
      published: new Date(),
      title: 'Questions from the Hallporters chair',
      fullSlug: '/videos/parodies/questions-from-the-hallporters-chair'
    },
    {
      id: 2,
      thumbnail_image: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1629016327/Screenshot_2021_08_15_at_09_31_34_069224e400.png'
      },
      embed_url: '6u31KU3nv-w',
      published: new Date(),
      title: 'Meghan and Harry Interview Parody: The Trial 3',
      fullSlug: ''
    },
    {
      id: 6,
      thumbnail_image: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1629016327/Screenshot_2021_08_15_at_09_31_34_069224e400.png'
      },
      embed_url: 'xJBlLgBNYhc',
      published: new Date(),
      title: 'Meghan and Harry Interview Parody: The Trial 2',
      fullSlug: ''
    },
    {
      id: 3,
      thumbnail_image: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1629016327/Screenshot_2021_08_15_at_09_31_34_069224e400.png'
      },
      embed_url: '',
      published: new Date(),
      title: 'Meghan & Harry Interview Parody 3 All Parts (1-10)',
      fullSlug: ''
    },
    {
      id: 4,
      thumbnail_image: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1629016327/Screenshot_2021_08_15_at_09_31_34_069224e400.png'
      },
      embed_url: 'B9ODFJyYv_k',
      published: new Date(),
      title: 'Harry Meghan Markel and Boris at the Bar: Parody 7',
      fullSlug: ''
    },
    {
      id: 5,
      thumbnail_image: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1629016327/Screenshot_2021_08_15_at_09_31_34_069224e400.png'
      },
      embed_url: 'tq1G9Z66Nds',
      published: new Date(),
      title: 'Boris Johnson Visits the Godfather: Parody',
      fullSlug: ''
    },
    {
      id: 10,
      thumbnail_image: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1629016327/Screenshot_2021_08_15_at_09_31_34_069224e400.png'
      },
      embed_url: 'tq1G9Z66Nds',
      published: new Date(),
      title: 'Boris Johnson Visits the Godfather: Parody',
      fullSlug: ''
    },
    {
      id: 15,
      thumbnail_image: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1629016327/Screenshot_2021_08_15_at_09_31_34_069224e400.png'
      },
      embed_url: 'tq1G9Z66Nds',
      published: new Date(),
      title: 'Boris Johnson Visits the Godfather: Parody',
      fullSlug: ''
    }
  ]
}
