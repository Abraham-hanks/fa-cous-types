import {IBase, ICloudinaryImage} from "../../generic";

export enum ProductStatus {
    published = 'published',
    drafted = 'drafted',
    shelved = 'shelved'
}

export type IProductQuantityOption = IBase & {
    variant: string;
    option: string;
}

export type IProductVariantOption = IBase & {
    name: string;
}

export interface IProductQuantityConfig extends IBase {
    options: Array<IProductQuantityOption>
    quantity: number;
    price: number;
}

export interface IProductVariantConfig extends IBase {
    name: string;
    options: Array<IProductVariantOption>
}

export interface IProductVariant extends IBase {
    hasDifferentPrices: boolean;
    config: Array<IProductVariantConfig>
}

export interface IProduct extends IBase {
    store: string;
    name: string;
    price: number;
    status: ProductStatus;
    images: Array<ICloudinaryImage>;
    quantity: number;
    description: string;
    variantConfig: {
        quantityAndPrice: Array<IProductQuantityConfig>;
        variants: IProductVariant
    }
}
