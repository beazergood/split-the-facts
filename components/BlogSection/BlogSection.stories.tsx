import '../../styles/tailwind.css'
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
  articles: [
    {
      title: 'test',
      intro: 'test',
      thumb: 'test',
      href: 'test'
    },
    {
      title: 'test 2',
      intro: 'test',
      thumb: 'test',
      href: 'test'
    }
  ]
}
