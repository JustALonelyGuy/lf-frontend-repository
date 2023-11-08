export interface UserAccount{

  username:string;
  email_address:string;
  phone_number:string,
  gender:string,
  password:string,
  confirmation_password:string,
  address:{
    address_line_1:string,
    address_line_2:string,
    state:string,
    postcode:string,
    city:string
  }

}
