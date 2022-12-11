export interface IProduct {
  id: string;
  name: string;
  description?: string;
  productCode?: number;
  imageUrl?: string;
  hasFreeShipping?: boolean;
  discount: number;
  discountedPrice: number;
  promotion: Array<string>;
  categories: Array<string>;
  region: Array<string>;
  rating: number;
  payment: Array<string>;
  price: number;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
  __v: number;
}

export interface IProductFiltersResponse {
  error: boolean;
  total: number;
  page: number;
  limit: number;
  //filtersAvailable: {
  //categories: Array<string>;
  //region: Array<string>;
  //payment: Array<string>;
  //promotion: Array<string>;
  //};
  products: Array<IProduct>;
}

export interface IProductsAdapter {
  ids: Array<string | number>;
  // A lookup table mapping entity IDs to the corresponding entity objects
  entities: {
    [index: number]: IProduct;
  };
}

export interface IProductState {
  products: Array<IProduct>;
}

export type SortOrder = -1 | 1 | 'asc' | 'ascending' | 'desc' | 'descending';

export interface IProductFilters {
  page?: number;
  limit?: number;
  search?: string;
  sort?: Array<string>;
  //sortBy?: {
  //[key: string]: SortOrder;
  //};
  categories?: {
    [key: string]: boolean;
  };
  region?: {
    [key: string]: boolean;
  };
  payment?: {
    [key: string]: boolean;
  };
  promotion?: {
    [key: string]: boolean;
  };
}
