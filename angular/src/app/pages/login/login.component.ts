import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authRequest: AuthenticationRequest = { email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(private router: Router,
              private authService: AuthenticationService,
              private tokenService: TokenService) {
  }
  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest,
    }).subscribe({next: (res) =>{
      this.tokenService.token = res.token as string;
      this.router.navigate(['calendar'])
      },
    error: (err) =>{
      console.log(err);
    }
    })
  }

  register() {
    this.router.navigate(['register']);
  }
}
