export interface SellerSignUp {
    name: string;
    email: string;
    password: string;
}

export interface SellerLogin {
    email: string;
    password: string;
}

export interface addProduct {
    productName: string;
    productPrice: number;
    productColor: string;
    productCategory: string;
    productImage: string;
    productDescription: string;
}
