import * as React from 'react'
import Layout from './src/components/layout'

import '@fontsource/open-sans'
import '@fontsource/teko'
import '@fontsource/oswald'
import '@fontsource/changa'

import './src/css/index.css'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const onInitialClientRender = () => {
  console.log(
    `%c
    ▄▄▄▄▄▄  ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄    ▄     ▄ ▄▄▄ ▄▄▄▄▄▄   ▄▄▄▄▄▄▄ 
    █      ██       █       █       █  █ █ ▄ █ █   █   ▄  █ █       █
    █  ▄    █    ▄▄▄█    ▄▄▄█▄     ▄█  █ ██ ██ █   █  █ █ █ █    ▄▄▄█
    █ █ █   █   █▄▄▄█   █▄▄▄  █   █    █       █   █   █▄▄█▄█   █▄▄▄ 
    █ █▄█   █    ▄▄▄█    ▄▄▄█ █   █    █       █   █    ▄▄  █    ▄▄▄█
    █       █   █▄▄▄█   █     █   █    █   ▄   █   █   █  █ █   █▄▄▄ 
    █▄▄▄▄▄▄██▄▄▄▄▄▄▄█▄▄▄█     █▄▄▄█    █▄▄█ █▄▄█▄▄▄█▄▄▄█  █▄█▄▄▄▄▄▄▄█`,
    'color: blue; background: gray;'
  )
}
