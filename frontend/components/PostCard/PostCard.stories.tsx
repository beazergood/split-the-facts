import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Postcard, PostcardProps } from './'

export default {
  title: 'Components/Postcard',
  component: Postcard
} as Meta

const args2 = {
  id: 2,
  title: 'What an absolute faff',
  thumb:
    'http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsplit-the-facts%2Fimage%2Fupload%2Fv1628946824%2Fbooks_sketch_1_ed7a2544db.png&w=1200&q=75',
  intro: 'Did you see him trying to tie his shoelaces?!',
  color: '#FFD56B',
  href: '',
  author: {
    name: '',
    picture: {
      url: ''
    }
  },
  published: new Date()
}

const Template: Story<PostcardProps> = (args) => {
  return (
    <div className="bg-popstar p-10 w-full flex flex-row space-x-3">
      <Postcard {...args} />
      {/* <Postcard {...args2} /> */}
    </div>
  )
}

export const Standard = Template.bind({})
Standard.args = {
  id: 1,
  title: 'How now brown cow',
  thumb:
    'http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsplit-the-facts%2Fimage%2Fupload%2Fv1628946824%2Fbooks_sketch_1_ed7a2544db.png&w=1200&q=75',
  intro: 'Why not buy not try not',
  color: '#FFD56B',
  href: '',
  author: {
    name: '',
    picture: {
      url: ''
    }
  },
  published: new Date()
}

// export const Long = Template.bind({})
// Long.args = {
//   title: 'The West',
//   thumb: '/svg/S.svg',
//   intro:
//     'Is best so much better than the west, no the east, that east is a beast!',
//   color: '#fff'
// }
