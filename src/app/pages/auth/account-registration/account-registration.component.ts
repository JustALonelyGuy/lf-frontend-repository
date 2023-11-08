import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';
import {UserService} from "../../../core/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-registration',
  templateUrl: './account-registration.component.html',
  styleUrls: ['./account-registration.component.css']
})
export class AccountRegistrationComponent implements OnInit {

  registrationForm:FormGroup = this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]],
    confirmation_password:['',[Validators.required]],
    profile:this.fb.group({
      gender:['',[Validators.required]],
      email_address:['',[Validators.required,Validators.email]],
      phone_number:['',[Validators.required]],
      address:this.fb.group({
        address_line_1:['',[Validators.required]],
        address_line_2:[''],
        state:['',[Validators.required]],
        postcode:['',[Validators.required,Validators.min(9999),Validators.max(99999)]],
        city:['',[Validators.required]]
      })
    }),
  })

  isButtonLoading = false;


  constructor(private fb:FormBuilder,private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
  }

  async register($event: MouseEvent) {


    console.log(this.registrationForm)
    this.isButtonLoading = true;
    await new Promise<void>((resolve)=>setTimeout(()=>{
      this.isButtonLoading = false;
      resolve();
    },1000));

    if(this.registrationForm.invalid){
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.userService.register(this.registrationForm.getRawValue(),{observe:'response'})
      .subscribe((res)=>{
        if(res.status === 204){

          Swal.fire({
            title: 'Account Registration',
            html: 'You have successfully registered an account. Redirecting in <b></b> second',
            timer: 2000,
            icon:'success',
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer()?.querySelector('b')
              let timerInterval = setInterval(() => {
                // @ts-ignore
              b.textContent = (Swal.getTimerLeft() /1000).toFixed(0);
              }, 100)
            },

          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              this.router.navigateByUrl('/login');
            }
          })
        }
      });
  }

  get username(){
    return this.registrationForm.get('username');
  }

  get email(){
    return this.registrationForm.get('profile.email_address');
  }

  get phoneNumber(){
    return this.registrationForm.get('profile.phone_number');
  }

  get addressLine1(){
    return this.registrationForm.get('profile.address.address_line_1');
  }

  get city(){
    return this.registrationForm.get('profile.address.city');
  }

  get state(){
    return this.registrationForm.get('profile.address.state');
  }

  get postcode(){
    return this.registrationForm.get('profile.address.postcode');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  get confirmationPassword(){
    return this.registrationForm.get('confirmation_password');
  }

}
