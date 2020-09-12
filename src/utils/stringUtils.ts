function toExtractOnlyTextContent(value: any) {
  const regex = /(<([^>]+)>)/gi
  if (value) {
    return value
      .replace('<br>', '\n\n')
      .replace(regex, '')
      .replace(/&nbsp;/gi, '')
  }
  return null
}

export default toExtractOnlyTextContent
