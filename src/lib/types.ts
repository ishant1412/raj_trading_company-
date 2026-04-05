type productType={
    name:string,
    image:string,
    price:number
}
interface FormData {
  name: string;
  price: string;
  image: string | null;
}
export type{
    productType,
    FormData
}