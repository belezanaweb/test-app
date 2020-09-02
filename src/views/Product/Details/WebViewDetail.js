/**
 * @Format
 */

import React from 'react'
import PropTypes from 'prop-types'
import { WebView } from 'react-native-webview'

const WebViewDetail = ({ html }) => {
  console.log('HTML', html)
  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: `<h2>${html}</h2>` }}
      style={{ height: 300 }}
    />
  )
  //return <WebView originWhitelist={['*']} source={{ html: '<h1>Hello world</h1>' }} />
}

WebViewDetail.propTypes = {
  html: PropTypes.string
}

export default WebViewDetail
