export interface Products {
  sku: string;
  name: string;
  mediaObject: MediaObject;
  releaseDate: string;
  novelty: boolean;
  gift: boolean;
  surprise: boolean;
  hiddenInCart: boolean;
  seo: SEO;
  inventory: GiftInventory;
  imageObjects: ImageObjectElement[];
  brand: Brand;
  gtin: string;
  slugName: string;
  featured: boolean;
  scaleValue: ScaleValue;
  organization: Organization;
  details: ProductDetails;
  presentation: Presentation;
  priceSpecification: PriceSpecification;
  benefits: Benefit[];
  aggregateRating: AggregateRating;
  departments: Department[];
  integrations: Integration[];
  marketable: Marketable;
  badge: string[];
  compositionId: string;
  showcasePreviews: ShowcasePreview[];
  breadcrumb: Breadcrumb[];
  aggregatedSkus: string[];
  soldSeparately: boolean;
  hidden: boolean;
  lastUpdate: LastUpdate;
  links: Link[];
  hasGiftBenefits: boolean;
}

export interface AggregateRating {
  ratingValue: number;
  ratingCount: number;
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

export interface Gift {
  sku: string;
  name: string;
  releaseDate: string;
  novelty: boolean;
  gift: boolean;
  surprise: boolean;
  hiddenInCart: boolean;
  seo: SEOClass;
  inventory: GiftInventory;
  imageObjects: ImageObjectElement[];
  brand: Brand;
  gtin: string;
  slugName: string;
  scaleValue: ScaleValue;
  organization: Organization;
  details: GiftDetails;
  priceSpecification: PriceSpecification;
  integrations: Integration[];
  badge: any[];
  compositionId: string;
  breadcrumb: Breadcrumb[];
  aggregatedSkus: string[];
  hidden: boolean;
  links: Link[];
  hasGiftBenefits: boolean;
}

export interface Brand {
  id: number;
  name: string;
  slugName: string;
  imageObject: BrandImageObject;
  description: string;
  links: Link[];
  line?: Line;
}

export interface BrandImageObject {
  logo: string;
}

export interface Line {
  name: string;
  slugName: string;
  description: string;
}

export interface Link {
  rel: Rel;
  href: string;
}

// eslint-disable-next-line prettier/prettier
export enum Rel {
  ByCompositeID = 'byCompositeId',
  Categories = 'categories',
  Msite = 'msite',
  Self = 'self',
  Site = 'site',
  Values = 'values',
}

export interface Breadcrumb {
  name: string;
  url: string;
  links: Link[];
}

export interface GiftDetails {
  shortDescription: string;
  description: string;
}

export interface ImageObjectElement {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  imageUrl: string;
}

export interface Integration {
  externalCategories?: ExternalCategories;
  name?: string;
  source: string;
}

export interface ExternalCategories {
  id: string;
  link: Link;
  breadCrumb: string;
}

export interface GiftInventory {
  quantity?: number;
  inventories: InventoryElement[];
  type: string;
}

export interface InventoryElement {
  quantity: number;
  addressLocality: string;
  type: string;
  priority: number;
}

export interface Organization {
  id: number;
  name: string;
  slugName: string;
  links: Link[];
}

export interface PriceSpecification {
  sku: string;
  price: number;
  maxPrice: number;
  percent: number;
  discount: number;
  installments: Installments;
  originalPrice?: number;
}

export interface Installments {
  numberOfPayments: number;
  monthlyPayment: number;
}

export interface ScaleValue {
  unit: string;
  value: number;
}

export interface SEOClass {
}

export interface Period {
  begin: string;
  showStopwatch: boolean;
}

export interface Department {
  id: string;
  slugName: string;
  name: string;
  categories: CategoryElement[];
  category: SEOClass;
  priority: number;
  links: Link[];
}

export interface CategoryElement {
  id: string;
  slugName: string;
  name: string;
  attributes: Attribute[];
  subcategory: SEOClass;
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

export interface Value {
  id: string;
  name: string;
  slugName: string;
  disabled: boolean;
  value: string;
  checked: boolean;
  links: Link[];
}

export interface ProductDetails {
  shortDescription: string;
  description: string;
  olfactivePyramid: OlfactivePyramid;
  occasion: string;
}

export interface OlfactivePyramid {
  topNodes: string;
  middleNodes: string;
  baseNodes: string;
}

export interface LastUpdate {
  updatedById: string;
  updatedByEmail: string;
  updateAt: string;
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

export interface MediaObject {
  contentUrl: string;
}

export interface Presentation {
  value: string;
  unit: string;
}

export interface SEO {
  title: string;
  keywords: string;
  description: string;
}

export interface ShowcasePreview {
  title: string;
  url: string;
}
