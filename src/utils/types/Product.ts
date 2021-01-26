/**
 * This file was made with http://json2ts.com/,
 * so maybe has some wrong type. I decided to focus only on
 * information i used, the proposal of this test.
 *
 */

export interface Seo {
  title: string;
  keywords: string;
  description: string;
}

export interface InventoryDetail {
  quantity: number;
  addressLocality: string;
  type: string;
  priority: number;
}

export interface Inventory {
  quantity: number;
  inventories: InventoryDetail[];
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

export interface BrandImageObject {
  logo: string;
}

export interface Link {
  rel: string;
  href: string;
}

export interface Brand {
  id: number;
  name: string;
  slugName: string;
  imageObject: BrandImageObject;
  description: string;
  links: Link[];
}

export interface ScaleValue {
  unit: string;
  value: number;
}

export interface Organization {
  id: number;
  name: string;
  slugName: string;
  links: Link[];
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

export interface AggregateRating {
  ratingValue: number;
  ratingCount: number;
}

export interface Value {
  id: string;
  name: string;
  slugName: string;
  disabled: boolean;
  value: string;
  checked: boolean;
  links: Link[];
}

export interface Attribute {
  id: string;
  name: string;
  slugName: string;
  required: boolean;
  filterable: boolean;
  groupUpdate: boolean;
  values: Value[];
  links: Link[];
}

export interface Category {
  id: string;
  slugName: string;
  name: string;
  attributes: Attribute[];
  subcategory: any;
  links: Link[];
}

export interface Department {
  id: string;
  slugName: string;
  name: string;
  categories: Category[];
  category: any;
  priority: number;
  links: Link[];
}

export interface ExternalCategories {
  id: string;
  link: Link;
  breadCrumb: string;
}

export interface Integration {
  externalCategories: ExternalCategories;
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
export interface Breadcrumb {
  name: string;
  url: string;
  links: Link[];
}

export interface LastUpdate {
  updatedById: string;
  updatedByEmail: string;
  updateAt: Date;
}

export default interface Product {
  sku: string;
  name: string;
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
  priceSpecification: PriceSpecification;
  aggregateRating: AggregateRating;
  departments: Department[];
  integrations: Integration[];
  marketable: Marketable;
  badge: string[];
  compositionId: string;
  showcasePreviews: ShowcasePreview[];
  breadcrumb: Breadcrumb[];
  aggregatedSkus: string[];
  hidden: boolean;
  lastUpdate: LastUpdate;
  links: Link[];
  hasGiftBenefits: boolean;
}
