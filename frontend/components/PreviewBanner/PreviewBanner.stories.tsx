import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import PreviewBanner from '.'

export default {
  title: 'Components/PreviewBanner',
  component: PreviewBanner
} as Meta

const Template: Story<any> = (args) => <PreviewBanner {...args} />

const PreviewBannerProps = {
  preview: true
}
// Default scenario
export const Default = Template.bind({})
Default.args = PreviewBannerProps
