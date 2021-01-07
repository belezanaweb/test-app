export type product = {
  sku: string;
  name: string;
  mediaObject: { contentUrl: string };
  releaseDate: string;
  novelty: boolean;
  gift: boolean;
  surprise: boolean;
  hiddenInCart: boolean;
  seo: seo;
  inventory: inventory;
  imageObjects: Array<imageObjects>;
  brand: brand;
  gtin: string;
  slugName: string;
  featured: boolean;
  scaleValue: scaleValue;
  organization: organization;
  details: details;
  presentation: presentation;
  priceSpecification: priceSpecification;
  benefit: benefit;
  aggregateRating: aggregateRating;
  departments: Array<department>;
  integrations: Array<integration>;
  marketable: marketable;
  badge: Array<string>;
  compositionId: string;
  showcasePreviews: Array<{
    title: string;
    url: string;
  }>;
  breadcrumb: Array<{
    name: string;
    url: string;
    links: Array<link>;
  }>;
  aggregatedSkus: Array<string>;
  soldSeparately: boolean;
  hidden: boolean;
  lastUpdate: {
    updatedById: string;
    updatedByEmail: string;
    updateAt: string;
  };
  links: Array<link>;
  hasGiftBenefits: boolean;
};

export type seo = {
  title: string;
  keywords: string;
  description: string;
};

export type inventory = {
  quantity: number;
  inventories: Array<inventories>;
  type: string;
};

export type inventories = {
  quantity: number;
  addressLocality: string;
  type: string;
  priority: number;
};

export type imageObjects = {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  imageUrl: string;
};
export type imageObject = {
  logo: string;
};
export type brand = {
  line: line;
  id: number;
  name: string;
  slugName: string;
  imageObject: imageObject;
  description: string;
  links: Array<link>;
};

export type line = {
  name: string;
  slugName: string;
  description: string;
};

export type scaleValue = {
  unit: string;
  value: number;
};

export type organization = {
  id: number;
  name: string;
  slugName: string;
  links: Array<link>;
};
export type link = {
  rel: string;
  href: string;
};
export type details = {
  shortDescription: string;
  description: string;
  olfactivePyramid: olfactivePyramid;
  occasion: string;
};

export type olfactivePyramid = {
  topNodes: string;
  middleNodes: string;
  baseNodes: string;
};

export type presentation = {
  value: string;
  unit: string;
};

export type priceSpecification = {
  sku: string;
  price: number;
  originalPrice: number;
  maxPrice: number;
  percent: number;
  discount: number;
  installments: {
    numberOfPayments: number;
    monthlyPayment: number;
  };
};

export type benefit = {
  offerId: string;
  offerTitle: string;
  offerHintDescription: string;
  type: string;
  target: string;
  gifts: product;
  period: period;
};

export type period = {
  begin: string;
  showStopwatch: boolean;
};
export type aggregateRating = {
  ratingValue: number;
  ratingCount: number;
};
export type department = {
  id: string;
  slugName: string;
  name: string;
  categories: Array<category>;
  category: any;
  priority: number;
  links: Array<link>;
};

export type category = {
  id: string;
  slugName: string;
  name: string;
  attributes: attribute;
  subcategory: any;
  links: Array<link>;
};

export type attribute = {
  id: string;
  name: string;
  slugName: string;
  required: boolean;
  filterable: boolean;
  groupUpdate: boolean;
  values: Array<{
    id: string;
    name: string;
    slugName: string;
    disabled: boolean;
    value: string;
    checked: boolean;
    links: Array<link>;
  }>;
  links: Array<link>;
};

export type integration = {
  externalCategories?: {
    id: string;
    link: link;
    breadCrumb: string;
  };
  name?: string;
  source: string;
};
export type marketable = {
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
};
