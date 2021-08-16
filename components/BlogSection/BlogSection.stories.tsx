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
      title: 'Testing testing',
      description: 'How now brown cow, how now brown cow.',
      image: {
        url:
          'http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsplit-the-facts%2Fimage%2Fupload%2Fv1628946824%2Fbooks_sketch_1_ed7a2544db.png&w=1200&q=75'
      },
      href: 'test'
    },
    {
      title: 'Test 2021',
      description: 'How now brown cow, how now brown cow.',
      image: {
        url:
          'http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsplit-the-facts%2Fimage%2Fupload%2Fv1628946824%2Fbooks_sketch_1_ed7a2544db.png&w=1200&q=75'
      },
      href: 'test'
    }
  ]
}
