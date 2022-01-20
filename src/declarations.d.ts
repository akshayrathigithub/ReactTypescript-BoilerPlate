declare module '*.png'
declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >

  const SRC: string
  export default SRC
}

declare module '*.jpg'
declare module '*.pdf'

declare global {
  interface Window {
    location: Location
  }
}
