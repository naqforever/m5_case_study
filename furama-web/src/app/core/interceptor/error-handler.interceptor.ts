import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import {ToasterService} from "angular2-toaster";
import {LoggerService} from "../service/logger.service";
import {environment} from "../../../environments/environment";
import {appToaster} from "../constant/app-toaster.config";
import {StatusCodes} from "http-status-codes";
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    private logger: LoggerService,
    private toasterService: ToasterService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      // Do something with the error
      this.logger.logError('Request error ' + JSON.stringify(response));
    }

    // console.error(error);
    const httpErrorCode = response['status'];
    switch (httpErrorCode) {
      case StatusCodes.UNAUTHORIZED:
        this.router.navigateByUrl('/auth/login');
        break;
      case StatusCodes.FORBIDDEN:
        this.router.navigateByUrl('/auth/403');
        break;
      case StatusCodes.BAD_REQUEST:
        this.logger.logError('BAD_REQUEST');
          break;
      default:
        this.toasterService.pop('error', appToaster.errorHead, response['message']);
    }

    throw response;
  }
}
