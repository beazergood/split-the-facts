import { BottomSheetWithForm, BottomSheetProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  component: BottomSheetWithForm,
  title: 'Component/BottomSheet'
} as Meta

// 👇 We create a “template” of how args map to rendering

const Template: Story<BottomSheetProps> = (args) => (
  <BottomSheetWithForm {...args} />
)

// 👇 Each story then reuses that template
export const MetaList = Template.bind({})
MetaList.args = {}
