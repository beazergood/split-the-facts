import React from 'react'
import { Story, Meta } from '@storybook/react'
import { OrnateFrame, OrnateFrameProps } from './'

export default {
  title: 'Components/OrnateFrame',
  component: OrnateFrame
} as Meta

const Template: Story<OrnateFrameProps> = (args) => <OrnateFrame {...args} />

export const Standard = Template.bind({})
Standard.args = {
  label: 'Videos'
}
export const Long = Template.bind({})
Long.args = {
  label: 'Parody Videos'
}
