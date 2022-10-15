import { Component, OnInit } from '@angular/core';

import { tap, delay, finalize, catchError } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  asteriskIcon = faAsterisk;
  error: string = '';
  isLoading: boolean = false;
  loginForm: UntypedFormGroup = new UntypedFormGroup({});

  private sub = new Subscription();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.isLoading = true;

    const credentials = this.loginForm.value;
    console.log(credentials)
    this.sub = this.authService
      .login(credentials)
      .pipe(
        tap(() => console.log('b')),
        delay(2500),
        tap(() => console.log('c')),
        tap(() => this.router.navigate(['/contact'])),
        finalize(() => (this.isLoading = false)),
        catchError(e => of((this.error = e)))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private buildForm(): void {
    this.loginForm = new UntypedFormGroup({
      username: new UntypedFormControl(''),
      password: new UntypedFormControl('')
    });
  }

  ngOnInit(): void {
  }
}
