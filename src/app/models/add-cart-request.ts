export interface AddCartRequest {
    userId: number;
    date: Date;
    products: Product[];
}

export interface CartResponse {
    id: number;
    userId: number;
    date: Date;
    products: Product[];
}

export interface Product {
    productId: number;
    quantity: number;
}
