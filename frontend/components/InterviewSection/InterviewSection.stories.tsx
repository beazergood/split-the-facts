import React from 'react'
import { Story, Meta } from '@storybook/react'
import { InterviewSection, InterviewSectionProps } from './'

export default {
  title: 'Home/InterviewSection',
  component: InterviewSection,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<InterviewSectionProps> = (args) => {
  return (
    <div className="bg-wall w-full">
      <InterviewSection {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  characters: [
    {
      id: 0,
      slug: '',
      image: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1626856591/Screenshot_2021_07_15_at_08_18_46_bb67c59869.png'
      },
      image_hover: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1626856591/Screenshot_2021_07_15_at_08_18_46_bb67c59869.png'
      },
      showName: true,
      name: 'Barman'
    },
    {
      id: 1,
      slug: '',
      image: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1626814330/Screenshot_2021_07_19_at_13_50_56_2ec05aac18.png'
      },
      image_hover: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1626814330/Screenshot_2021_07_19_at_13_50_56_2ec05aac18.png'
      },
      showName: true,
      name: 'Harry Meghan Markle Windsor'
    },
    {
      id: 2,
      slug: '',
      image: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1626814514/Screenshot_2021_07_14_at_11_18_56_54c8fe5500.png'
      },
      image_hover: {
        url:
          'https://res.cloudinary.com/split-the-facts/image/upload/v1626814514/Screenshot_2021_07_14_at_11_18_56_54c8fe5500.png'
      },
      showName: true,
      name: 'Dr Jackson'
    }
  ]
}
