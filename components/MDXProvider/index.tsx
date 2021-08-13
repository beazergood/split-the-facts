import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const mdComponents = {
  // eslint-disable-next-line react/display-name
  h1: (props) => <h1 style={{ color: 'green' }} {...props} />
}

export const MDXProviderComponent = ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)
