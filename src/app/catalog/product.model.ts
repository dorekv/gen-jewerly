export interface IProduct{
    id: number;
    description: string;
    name: string;
    imageFileName: string;
    price: number;
    discount: number;
    category?: string;
}