import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../core/user/user.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {NotificationToast} from "../../../shared/notification/customized.alert";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !:FormGroup;

  isButtonLoading = false;

  constructor(private fb:FormBuilder,private userService:UserService,
              private router:Router) {
    //create login form
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }


  async login($event: MouseEvent) {

    this.isButtonLoading = true;
    await new Promise<void>((resolve)=>setTimeout(()=>{
      this.isButtonLoading = false;
      resolve();
    },1000));

    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
    this.userService.login(this.loginForm.getRawValue()).subscribe(res=>{
      this.userService.storeToken(res);
      this.router.navigateByUrl('/').then(result=>{
        NotificationToast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
      });
    })

  }
}

