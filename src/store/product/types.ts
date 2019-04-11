import { Action } from 'redux'

export interface IMediaObject {
  contentUrl: string
}

export interface ISeo {
  title: string
  keywords: string
  description: string
}

export interface IInventory2 {
  quantity: number
  addressLocality: string
  type: string
  priority: number
}

export interface IInventory {
  quantity: number
  inventories: IInventory2[]
  type: string
}

export interface IImageObject {
  featured: boolean
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
  imageUrl: string
}

export interface ILine {
  name: string
  slugName: string
  description: string
}

export interface IImageObject2 {
  logo: string
}

export interface ILink {
  rel: string
  href: string
}

export interface IBrand {
  line: ILine
  id: number
  name: string
  slugName: string
  imageObject: IImageObject2
  description: string
  links: ILink[]
}

export interface IScaleValue {
  unit: string
  value: number
}

export interface ILink2 {
  rel: string
  href: string
}

export interface IOrganization {
  id: number
  name: string
  slugName: string
  links: ILink2[]
}

export interface IOlfactivePyramid {
  topNodes: string
  middleNodes: string
  baseNodes: string
}

export interface IDetails {
  shortDescription: string
  description: string
  olfactivePyramid: IOlfactivePyramid
  occasion: string
}

export interface IPresentation {
  value: string
  unit: string
}

export interface IInstallments {
  numberOfPayments: number
  monthlyPayment: number
}

export interface IPriceSpecification {
  sku: string
  price: number
  originalPrice: number
  maxPrice: number
  percent: number
  discount: number
  installments: IInstallments
}

export interface ISeo2 {
}

export interface IInventory4 {
  quantity: number
  addressLocality: string
  type: string
  priority: number
}

export interface IInventory3 {
  quantity: number
  inventories: IInventory4[]
  type: string
}

export interface IImageObject3 {
  featured: boolean
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
  imageUrl: string
}

export interface IImageObject4 {
  logo: string
}

export interface ILink3 {
  rel: string
  href: string
}

export interface IBrand2 {
  id: number
  name: string
  slugName: string
  imageObject: IImageObject4
  description: string
  links: ILink3[]
}

export interface IScaleValue2 {
  unit: string
  value: number
}

export interface ILink4 {
  rel: string
  href: string
}

export interface IOrganization2 {
  id: number
  name: string
  slugName: string
  links: ILink4[]
}

export interface IDetails2 {
  shortDescription: string
  description: string
}

export interface IInstallments2 {
  numberOfPayments: number
  monthlyPayment: number
}

export interface IPriceSpecification2 {
  sku: string
  price: number
  maxPrice: number
  percent: number
  discount: number
  installments: IInstallments2
}

export interface ILink5 {
  rel: string
  href: string
}

export interface IExternalCategories {
  id: string
  link: ILink5
  breadCrumb: string
}

export interface IIntegration {
  externalCategories: IExternalCategories
  name: string
  source: string
}

export interface ILink6 {
  rel: string
  href: string
}

export interface IBreadcrumb {
  name: string
  url: string
  links: ILink6[]
}

export interface ILink7 {
  rel: string
  href: string
}

export interface IGift {
  sku: string
  name: string
  releaseDate: Date
  novelty: boolean
  gift: boolean
  surprise: boolean
  hiddenInCart: boolean
  seo: ISeo2
  inventory: IInventory3
  imageObjects: IImageObject3[]
  brand: IBrand2
  gtin: string
  slugName: string
  scaleValue: IScaleValue2
  organization: IOrganization2
  details: IDetails2
  priceSpecification: IPriceSpecification2
  integrations: IIntegration[]
  badge: any[]
  compositionId: string
  breadcrumb: IBreadcrumb[]
  aggregatedSkus: string[]
  hidden: boolean
  links: ILink7[]
  hasGiftBenefits: boolean
}

export interface IPeriod {
  begin: Date
  showStopwatch: boolean
}

export interface IBenefit {
  offerId: string
  offerTitle: string
  offerHintDescription: string
  type: string
  target: string
  gifts: IGift[]
  period: IPeriod
}

export interface IAggregateRating {
  ratingValue: number
  ratingCount: number
}

export interface ILink8 {
  rel: string
  href: string
}

export interface IValue {
  id: string
  name: string
  slugName: string
  disabled: boolean
  value: string
  checked: boolean
  links: ILink8[]
}

export interface ILink9 {
  rel: string
  href: string
}

export interface IAttribute {
  id: string
  name: string
  slugName: string
  required: boolean
  filterable: boolean
  groupUpdate: boolean
  values: IValue[]
  links: ILink9[]
}

export interface ISubcategory {
}

export interface ILink10 {
  rel: string
  href: string
}

export interface ICategory {
  id: string
  slugName: string
  name: string
  attributes: IAttribute[]
  subcategory: ISubcategory
  links: ILink10[]
}

export interface ICategory2 {
}

export interface ILink11 {
  rel: string
  href: string
}

export interface IDepartment {
  id: string
  slugName: string
  name: string
  categories: ICategory[]
  category: ICategory2
  priority: number
  links: ILink11[]
}

export interface ILink12 {
  rel: string
  href: string
}

export interface IExternalCategories2 {
  id: string
  link: ILink12
  breadCrumb: string
}

export interface IIntegration2 {
  externalCategories: IExternalCategories2
  name: string
  source: string
}

export interface IMarketable {
  isMarketable: boolean
  hasDescription: boolean
  hasPriceSpecification: boolean
  isGift: boolean
  discontinued: boolean
  hasImage: boolean
  inconsistent: boolean
  hidden: boolean
  atLeastOneInventoryHasStockForAllItems: boolean
  hasScaleValue: boolean
}

export interface IShowcasePreview {
  title: string
  url: string
}

export interface ILink13 {
  rel: string
  href: string
}

export interface IBreadcrumb2 {
  name: string
  url: string
  links: ILink13[]
}

export interface ILastUpdate {
  updatedById: string
  updatedByEmail: string
  updateAt: Date
}

export interface ILink14 {
  rel: string
  href: string
}

export interface IProduct {
  sku: string
  name: string
  mediaObject: IMediaObject
  releaseDate: Date
  novelty: boolean
  gift: boolean
  surprise: boolean
  hiddenInCart: boolean
  seo: ISeo
  inventory: IInventory
  imageObjects: IImageObject[]
  brand: IBrand
  gtin: string
  slugName: string
  featured: boolean
  scaleValue: IScaleValue
  organization: IOrganization
  details: IDetails
  presentation: IPresentation
  priceSpecification: IPriceSpecification
  benefits: IBenefit[]
  aggregateRating: IAggregateRating
  departments: IDepartment[]
  integrations: IIntegration2[]
  marketable: IMarketable
  badge: string[]
  compositionId: string
  showcasePreviews: IShowcasePreview[]
  breadcrumb: IBreadcrumb2[]
  aggregatedSkus: string[]
  soldSeparately: boolean
  hidden: boolean
  lastUpdate: ILastUpdate
  links: ILink14[]
  hasGiftBenefits: boolean
}


export interface IProductState {
  loading: boolean
  page: number
  size: number
  products: IProduct[]
  product: IProduct
  error: any
  refreshing: boolean

}

export interface IResponse extends Action {
}
