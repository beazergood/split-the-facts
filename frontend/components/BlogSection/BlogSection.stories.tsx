import { BlogSection, BlogSectionProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  component: BlogSection,
  title: 'Home/BlogSection'
} as Meta

// 👇 We create a “template” of how args map to rendering

const Template: Story<BlogSectionProps> = (args) => <BlogSection {...args} />

// 👇 Each story then reuses that template
export const MetaList = Template.bind({})
MetaList.args = {
  title: 'Blog',
  theme: {
    primary: '',
    secondary: ''
  },
  articles: [
    {
      title: 'Whacking the Elites',
      description:
        'Although this phenomenon (Brexit is one specific to the UK, the crux of disquietude that was unleashed like a bursted boil on that fateful day, has parallels all across the Western World.',
      image: {
        url:
          'http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsplit-the-facts%2Fimage%2Fupload%2Fv1628946824%2Fbooks_sketch_1_ed7a2544db.png&w=1200&q=75'
      },
      href: 'test'
    },
    {
      title: 'Why is Laughter Important?',
      description:
        'A laugh takes a moment. And in that moment, much is admitted to oneself.',
      image: {
        url:
          'http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsplit-the-facts%2Fimage%2Fupload%2Fv1629992519%2F91_FB_7601_D5_BD_4604_8_B90_494_D383_E1_D98_76dac39139.jpg&w=1200&q=75'
      },
      href: 'test'
    },
    {
      title: 'Introduction to Split! The West at War with Itself',
      description:
        'Many have asked me why I called the channel, and my website, Split!',
      image: {
        url:
          'http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsplit-the-facts%2Fimage%2Fupload%2Fv1628946824%2Fbooks_sketch_1_ed7a2544db.png&w=1200&q=75'
      },
      href: 'test'
    },
    {
      title: 'The West',
      description:
        'After deciding on the theme of my book, it was essential to define my terms. What do I mean by The West?.',
      image: {
        url:
          'http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsplit-the-facts%2Fimage%2Fupload%2Fv1628946824%2Fbooks_sketch_1_ed7a2544db.png&w=1200&q=75'
      },
      href: 'test'
    }
  ]
}
