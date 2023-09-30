export interface Charge{
  total_amount:number;
  payer:{
    email_address:string,
    phone_number:string,
    name:string
  },
  items:[{name:string,category:string,amount:number,sku:string}]
}
