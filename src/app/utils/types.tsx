
export type Product = {
    _id: number;
    title: string;
    price: number;
    productImage: any;
    tags: string;
    dicountPercentage: number;
    description: string;
    isNew?: boolean;
}




export type Cart = {
    _id: number;
    title: string;
    price: number;
    productImage: any;
    tags: string;
    dicountPercentage: number;
    description: string;
    isNew: boolean;
}