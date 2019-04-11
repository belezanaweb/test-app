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

export interface Details2 {
  shortDescription: string
  description: string
}

export interface Installments2 {
  numberOfPayments: number
  monthlyPayment: number
}

export interface PriceSpecification2 {
  sku: string
  price: number
  maxPrice: number
  percent: number
  discount: number
  installments: Installments2
}

export interface Link5 {
  rel: string
  href: string
}

export interface ExternalCategories {
  id: string
  link: Link5
  breadCrumb: string
}

export interface Integration {
  externalCategories: ExternalCategories
  name: string
  source: string
}

export interface Link6 {
  rel: string
  href: string
}

export interface Breadcrumb {
  name: string
  url: string
  links: Link6[]
}

export interface Link7 {
  rel: string
  href: string
}

export interface Gift {
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
  details: Details2
  priceSpecification: PriceSpecification2
  integrations: Integration[]
  badge: any[]
  compositionId: string
  breadcrumb: Breadcrumb[]
  aggregatedSkus: string[]
  hidden: boolean
  links: Link7[]
  hasGiftBenefits: boolean
}

export interface Period {
  begin: Date
  showStopwatch: boolean
}

export interface IBenefit {
  offerId: string
  offerTitle: string
  offerHintDescription: string
  type: string
  target: string
  gifts: Gift[]
  period: Period
}

export interface IAggregateRating {
  ratingValue: number
  ratingCount: number
}

export interface Link8 {
  rel: string
  href: string
}

export interface Value {
  id: string
  name: string
  slugName: string
  disabled: boolean
  value: string
  checked: boolean
  links: Link8[]
}

export interface Link9 {
  rel: string
  href: string
}

export interface Attribute {
  id: string
  name: string
  slugName: string
  required: boolean
  filterable: boolean
  groupUpdate: boolean
  values: Value[]
  links: Link9[]
}

export interface Subcategory {
}

export interface Link10 {
  rel: string
  href: string
}

export interface Category {
  id: string
  slugName: string
  name: string
  attributes: Attribute[]
  subcategory: Subcategory
  links: Link10[]
}

export interface Category2 {
}

export interface Link11 {
  rel: string
  href: string
}

export interface IDepartment {
  id: string
  slugName: string
  name: string
  categories: Category[]
  category: Category2
  priority: number
  links: Link11[]
}

export interface Link12 {
  rel: string
  href: string
}

export interface ExternalCategories2 {
  id: string
  link: Link12
  breadCrumb: string
}

export interface IIntegration2 {
  externalCategories: ExternalCategories2
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

export interface Link13 {
  rel: string
  href: string
}

export interface IBreadcrumb2 {
  name: string
  url: string
  links: Link13[]
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
