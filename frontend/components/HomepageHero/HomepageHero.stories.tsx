import React from 'react'
import { Story, Meta } from '@storybook/react'
import { HomepageHero, HomepageHeroProps } from '.'

export default {
  title: 'Home/HomepageHero',
  component: HomepageHero,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<HomepageHeroProps> = (args) => {
  return (
    <div className="bg-popstar m-0 p-0">
      <HomepageHero {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  heroImage: {
    url:
      'https://res.cloudinary.com/split-the-facts/image/upload/v1628605413/photo_sketch_merge_732x431_feathered_95f2210239.png'
  },
  embedId: '',
  aboveImageText: 'Worldwide Exclusive',
  cursiveHeader: 'Questions from ',
  mainHeader: 'The Hallporters Chair',
  videoId: 'Hallporters Chair Video'
}
