export const removeTags = (text: any) => {
  return text
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/&nbsp/g, ' ')
    .replace(/;/g, ' ')
    .trim()
}
