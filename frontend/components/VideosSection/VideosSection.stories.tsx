import { VideosSection, VideosSectionProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  component: VideosSection,
  title: 'Home/VideosSection'
} as Meta

// 👇 We create a “template” of how args map to rendering

const Template: Story<VideosSectionProps> = (args) => (
  <VideosSection {...args} />
)

// 👇 Each story then reuses that template
export const MetaList = Template.bind({})
MetaList.args = {
  theme: {
    primary: ''
  },
  videos: {
    theGodfather: [],
    royalInterview: [],
    atTheBar: [],
    recentVideos: [
      {
        id: 1,
        title: 'Test 1',
        published: new Date(),
        fullSlug: '',
        thumbnail_image: {
          url:
            'https://res.cloudinary.com/split-the-facts/image/upload/v1628605413/photo_sketch_merge_732x431_feathered_95f2210239.png'
        },
        href: ''
      },
      {
        id: 2,
        title: 'Test 2',
        published: new Date(),
        fullSlug: '',
        thumbnail_image: {
          url:
            'https://res.cloudinary.com/split-the-facts/image/upload/v1628605413/photo_sketch_merge_732x431_feathered_95f2210239.png'
        },
        href: ''
      },
      {
        id: 3,
        title: 'Test 3',
        published: new Date(),
        fullSlug: '',
        thumbnail_image: {
          url:
            'https://res.cloudinary.com/split-the-facts/image/upload/v1628605413/photo_sketch_merge_732x431_feathered_95f2210239.png'
        },
        href: ''
      },
      {
        id: 4,
        title: 'Test 4',
        published: new Date(),
        fullSlug: '',
        thumbnail_image: {
          url:
            'https://res.cloudinary.com/split-the-facts/image/upload/v1628605413/photo_sketch_merge_732x431_feathered_95f2210239.png'
        },
        href: ''
      },
      {
        id: 5,
        title: 'Test 5',
        published: new Date(),
        fullSlug: '',
        thumbnail_image: {
          url:
            'https://res.cloudinary.com/split-the-facts/image/upload/v1628605413/photo_sketch_merge_732x431_feathered_95f2210239.png'
        },
        href: ''
      },
      {
        id: 6,
        title: 'Test 6',
        published: new Date(),
        fullSlug: '',
        thumbnail_image: {
          url:
            'https://res.cloudinary.com/split-the-facts/image/upload/v1628605413/photo_sketch_merge_732x431_feathered_95f2210239.png'
        },
        href: ''
      },
      {
        id: 7,
        title: 'Test 7',
        published: new Date(),
        fullSlug: '',
        thumbnail_image: {
          url:
            'https://res.cloudinary.com/split-the-facts/image/upload/v1628605413/photo_sketch_merge_732x431_feathered_95f2210239.png'
        },
        href: ''
      },
      {
        id: 8,
        title: 'Test 8',
        published: new Date(),
        fullSlug: '',
        thumbnail_image: {
          url:
            'https://res.cloudinary.com/split-the-facts/image/upload/v1628605413/photo_sketch_merge_732x431_feathered_95f2210239.png'
        },
        href: ''
      }
    ]
  }
}
