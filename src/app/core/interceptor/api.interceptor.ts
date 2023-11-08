import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import Swal from "sweetalert2";
import {ErrorCode} from "../../shared/error.code";

@Injectable()
export class ApiInterceptor implements  HttpInterceptor{

  private baseUrl = 'http://localhost:8081';
  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `${this.baseUrl}${req.url}` });
    return next.handle(apiReq).pipe(catchError(err=>{
      if(!(err.error instanceof ErrorEvent)) {

        console.log(err);
        switch(err.error.code){
          case ErrorCode.LOGIN:
              Swal.fire({
                title:'Login Error',
                html:'Invalid username or password',
                icon:'error',
                showCloseButton:true,
              }).then((result)=>{
                if(result.isDismissed || result.isConfirmed){

                  console.log('Popup message has been closed');
                }
              });

            break;

          default:

            Swal.fire({
              title:'Error',
              html:'An unexpected error has occured. Please try again later.',
              icon:'error',
              showCloseButton:true,
            }).then((result)=>{
              if(result.isDismissed || result.isConfirmed){
                window.location.reload();
                console.log('Popup message has been closed');
              }
            });
        }
      }
      console.log(err.error instanceof ErrorEvent);
      return throwError(err);
    }));
  }

}
