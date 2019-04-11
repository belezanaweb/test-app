import styled from 'theme'
import React from 'react'
import { IImageObject } from 'store/product/types'

interface IProps {
  images?: IImageObject[]
}

export const ProductImage: React.FunctionComponent<IProps> = ({images}) => {
  const featured = images.filter(i => i.featured)[0] || images[0]
  if (!featured) return null
  return (
    <Image
      source={{
        uri: featured.medium,
      }}
    />
  )
}

const Image = styled.Image`
   flex: 1;
   width: 100px;
   height: 130px;
   resize-mode: cover;
`
