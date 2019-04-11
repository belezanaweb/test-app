import { Action } from 'redux'

export interface MediaObject {
  contentUrl: string;
}

export interface Seo {
  title: string;
  keywords: string;
  description: string;
}

export interface Inventory2 {
  quantity: number;
  addressLocality: string;
  type: string;
  priority: number;
}

export interface Inventory {
  quantity: number;
  inventories: Inventory2[];
  type: string;
}

export interface ImageObject {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  imageUrl: string;
}

export interface Line {
  name: string;
  slugName: string;
  description: string;
}

export interface ImageObject2 {
  logo: string;
}

export interface Link {
  rel: string;
  href: string;
}

export interface Brand {
  line: Line;
  id: number;
  name: string;
  slugName: string;
  imageObject: ImageObject2;
  description: string;
  links: Link[];
}

export interface ScaleValue {
  unit: string;
  value: number;
}

export interface Link2 {
  rel: string;
  href: string;
}

export interface Organization {
  id: number;
  name: string;
  slugName: string;
  links: Link2[];
}

export interface OlfactivePyramid {
  topNodes: string;
  middleNodes: string;
  baseNodes: string;
}

export interface Details {
  shortDescription: string;
  description: string;
  olfactivePyramid: OlfactivePyramid;
  occasion: string;
}

export interface Presentation {
  value: string;
  unit: string;
}

export interface Installments {
  numberOfPayments: number;
  monthlyPayment: number;
}

export interface PriceSpecification {
  sku: string;
  price: number;
  originalPrice: number;
  maxPrice: number;
  percent: number;
  discount: number;
  installments: Installments;
}

export interface Seo2 {
}

export interface Inventory4 {
  quantity: number;
  addressLocality: string;
  type: string;
  priority: number;
}

export interface Inventory3 {
  quantity: number;
  inventories: Inventory4[];
  type: string;
}

export interface ImageObject3 {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  imageUrl: string;
}

export interface ImageObject4 {
  logo: string;
}

export interface Link3 {
  rel: string;
  href: string;
}

export interface Brand2 {
  id: number;
  name: string;
  slugName: string;
  imageObject: ImageObject4;
  description: string;
  links: Link3[];
}

export interface ScaleValue2 {
  unit: string;
  value: number;
}

export interface Link4 {
  rel: string;
  href: string;
}

export interface Organization2 {
  id: number;
  name: string;
  slugName: string;
  links: Link4[];
}

export interface Details2 {
  shortDescription: string;
  description: string;
}

export interface Installments2 {
  numberOfPayments: number;
  monthlyPayment: number;
}

export interface PriceSpecification2 {
  sku: string;
  price: number;
  maxPrice: number;
  percent: number;
  discount: number;
  installments: Installments2;
}

export interface Link5 {
  rel: string;
  href: string;
}

export interface ExternalCategories {
  id: string;
  link: Link5;
  breadCrumb: string;
}

export interface Integration {
  externalCategories: ExternalCategories;
  name: string;
  source: string;
}

export interface Link6 {
  rel: string;
  href: string;
}

export interface Breadcrumb {
  name: string;
  url: string;
  links: Link6[];
}

export interface Link7 {
  rel: string;
  href: string;
}

export interface Gift {
  sku: string;
  name: string;
  releaseDate: Date;
  novelty: boolean;
  gift: boolean;
  surprise: boolean;
  hiddenInCart: boolean;
  seo: Seo2;
  inventory: Inventory3;
  imageObjects: ImageObject3[];
  brand: Brand2;
  gtin: string;
  slugName: string;
  scaleValue: ScaleValue2;
  organization: Organization2;
  details: Details2;
  priceSpecification: PriceSpecification2;
  integrations: Integration[];
  badge: any[];
  compositionId: string;
  breadcrumb: Breadcrumb[];
  aggregatedSkus: string[];
  hidden: boolean;
  links: Link7[];
  hasGiftBenefits: boolean;
}

export interface Period {
  begin: Date;
  showStopwatch: boolean;
}

export interface Benefit {
  offerId: string;
  offerTitle: string;
  offerHintDescription: string;
  type: string;
  target: string;
  gifts: Gift[];
  period: Period;
}

export interface AggregateRating {
  ratingValue: number;
  ratingCount: number;
}

export interface Link8 {
  rel: string;
  href: string;
}

export interface Value {
  id: string;
  name: string;
  slugName: string;
  disabled: boolean;
  value: string;
  checked: boolean;
  links: Link8[];
}

export interface Link9 {
  rel: string;
  href: string;
}

export interface Attribute {
  id: string;
  name: string;
  slugName: string;
  required: boolean;
  filterable: boolean;
  groupUpdate: boolean;
  values: Value[];
  links: Link9[];
}

export interface Subcategory {
}

export interface Link10 {
  rel: string;
  href: string;
}

export interface Category {
  id: string;
  slugName: string;
  name: string;
  attributes: Attribute[];
  subcategory: Subcategory;
  links: Link10[];
}

export interface Category2 {
}

export interface Link11 {
  rel: string;
  href: string;
}

export interface Department {
  id: string;
  slugName: string;
  name: string;
  categories: Category[];
  category: Category2;
  priority: number;
  links: Link11[];
}

export interface Link12 {
  rel: string;
  href: string;
}

export interface ExternalCategories2 {
  id: string;
  link: Link12;
  breadCrumb: string;
}

export interface Integration2 {
  externalCategories: ExternalCategories2;
  name: string;
  source: string;
}

export interface Marketable {
  isMarketable: boolean;
  hasDescription: boolean;
  hasPriceSpecification: boolean;
  isGift: boolean;
  discontinued: boolean;
  hasImage: boolean;
  inconsistent: boolean;
  hidden: boolean;
  atLeastOneInventoryHasStockForAllItems: boolean;
  hasScaleValue: boolean;
}

export interface ShowcasePreview {
  title: string;
  url: string;
}

export interface Link13 {
  rel: string;
  href: string;
}

export interface Breadcrumb2 {
  name: string;
  url: string;
  links: Link13[];
}

export interface LastUpdate {
  updatedById: string;
  updatedByEmail: string;
  updateAt: Date;
}

export interface Link14 {
  rel: string;
  href: string;
}

export interface IProduct {
  sku: string;
  name: string;
  mediaObject: MediaObject;
  releaseDate: Date;
  novelty: boolean;
  gift: boolean;
  surprise: boolean;
  hiddenInCart: boolean;
  seo: Seo;
  inventory: Inventory;
  imageObjects: ImageObject[];
  brand: Brand;
  gtin: string;
  slugName: string;
  featured: boolean;
  scaleValue: ScaleValue;
  organization: Organization;
  details: Details;
  presentation: Presentation;
  priceSpecification: PriceSpecification;
  benefits: Benefit[];
  aggregateRating: AggregateRating;
  departments: Department[];
  integrations: Integration2[];
  marketable: Marketable;
  badge: string[];
  compositionId: string;
  showcasePreviews: ShowcasePreview[];
  breadcrumb: Breadcrumb2[];
  aggregatedSkus: string[];
  soldSeparately: boolean;
  hidden: boolean;
  lastUpdate: LastUpdate;
  links: Link14[];
  hasGiftBenefits: boolean;
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
