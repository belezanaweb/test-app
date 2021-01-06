export type product = {
  sku: string;
  name: string;
  mediaObject: Array<{ contentUrl: string }>;
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
  links: Array<{ rel: string; href: string }>;
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
  links: Array<{ rel: string; href: string }>;
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
