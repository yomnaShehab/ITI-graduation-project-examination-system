import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {take} from "rxjs";
import {IUser} from "../../shared/interfaces/user.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean = false;
  private emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';

  constructor(private authService: AuthService,
              private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    this.isLoading = true;
    this.authService.isUserLoggedIn ? this.router.navigate(['/home']) : this.router.navigate(['/auth/login']);
    this.isLoading = false;
  }

  onLogin(): void {
    this.isLoading = true;
    this.authService.loginWithEmailAndPassword(this.loginForm.value)
      .pipe(take(1))
      .subscribe({
        next: (user: IUser) => {
          if (user) {
            this.authService.userInfo = user;
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          console.log('ERROR', err);
        },
        complete: () => {
          this.isLoading = false;
        }
      })
  }
}
