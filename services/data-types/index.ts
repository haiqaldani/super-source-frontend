export interface DataTypes {
  hits: SupplierTypes[]
  info: InfoTypes
}

export interface InfoTypes {
  page: number;
  totalPage: number;

}
export interface SupplierTypes {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  city: string;
  category: CategoryTypes[];
}

export interface CategoryTypes {
  id: string;
  name: string;
  mainCategoryId: string;
  mainCategory: MainCategoryTypes;
}

export interface MainCategoryTypes {
  id: string;
  name: string;
}

export interface CategorySupplierTypes {
  categoryId: string;
  supplierId: string;
}
