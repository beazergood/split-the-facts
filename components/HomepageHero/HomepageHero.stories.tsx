import React from 'react'
import { Story, Meta } from '@storybook/react'
import { HomepageHero, HomepageHeroProps } from '.'

export default {
  title: 'Components/HomepageHero',
  component: HomepageHero,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<HomepageHeroProps> = (args) => <HomepageHero {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  characters: [
    {
      id: 0,
      name: 'Jim',
      image: {
        url: ''
      }
    },
    {
      id: 1,
      name: 'Jim',
      image: {
        url: ''
      }
    },
    {
      id: 2,
      name: 'Jim',
      image: {
        url: ''
      }
    },
    {
      id: 3,
      name: 'Jim',
      image: {
        url: ''
      }
    },
    {
      id: 4,
      name: 'Jim',
      image: {
        url: ''
      }
    }
  ]
}
