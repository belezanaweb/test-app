const removeHtmlTags = value =>
  value
    .replace(/(<(br[^>]*)>)/gi, '\n')
    .replace(/(<([^>]+)>)/gi, '')
    .replace('&nbsp;', '')

export default removeHtmlTags
