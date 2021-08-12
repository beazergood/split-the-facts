import '../../styles/tailwind.css'
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
    recentVideos: []
  }
}
