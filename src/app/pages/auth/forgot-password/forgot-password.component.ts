import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {map, Observable, takeWhile, tap, timer} from "rxjs";
import {UserService} from "../../../core/user/user.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  emailAddress: string = '';
  isSent: boolean = false;

  $timer: Observable<any> = new Observable<any>();
  reSend: boolean = false;

  isButtonLoading = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  async verifyEmail() {

    this.isButtonLoading = true;

    this.isButtonLoading = true;
    await new Promise<void>((resolve)=>setTimeout(()=>{
      this.isButtonLoading = false;
      resolve();
    },1000));


    if (this.emailAddress == null || this.emailAddress == '') {
      Swal.fire({
        title: 'Unable to proceed',
        text: 'Email address is required',
        icon: 'error'
      }).then(result=>{
        if(result.isDismissed || result.isConfirmed){
          return;
        }
      });
    }

    this.reSend = false;

    this.userService.sendAccountRecoveryEmail(this.emailAddress,{observe:'response'}).subscribe(res=>{
      // next:
      //   (res: any) => {
      //     if (res.data?.['sendForgotPasswordEmail']) {
      //       this.isSent = res.data?.['sendForgotPasswordEmail'];
      //       Swal.fire({
      //         title: 'Recovery Password',
      //         text: `Recovery password link has been sent to ${this.emailAddress}`,
      //         icon: 'success',
      //       });
      //
      //       this.$timer = timer(0, 1000).pipe(
      //         map(n => (10 - n)),
      //         takeWhile(n => n >= 0),
      //         tap(null, null, () => this.reSend = true)
      //       );
      //     }
      //   }, error: err => {
      //   Swal.fire({
      //     title: 'Error',
      //     text: err,
      //     icon: 'error'
      //   })
      // }
      if(res.status === 200){
        this.isSent = true;

        Swal.fire({
          title:'Recovery Password',
          text: `Recovery password link has been sent to ${this.emailAddress}`,
          icon: 'success',
        })
          .then(result=>{
            this.isSent = true;
            this.$timer = timer(0, 1000).pipe(
              map(n => (10 - n)),
              takeWhile(n => n >= 0),
              tap(null, null, () => this.reSend = true)
            );
          });

      }

    });

  }

}
