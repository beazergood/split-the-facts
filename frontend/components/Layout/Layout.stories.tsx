import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Layout from '.'

export default {
  title: 'Layouts/Layout',
  component: Layout
} as Meta

const Template: Story<any> = (args) => <Layout {...args} />

const LayoutProps = {
  preview: true
}
// Default scenario
export const Default = Template.bind({})
Default.args = LayoutProps
