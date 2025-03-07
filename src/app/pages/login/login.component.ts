import { Component} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Logging in with:', this.loginForm.value);
      this.router.navigate(['/home']);
      // Redirect to Home
    }
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
  goToResetPassword() {
    this.router.navigate(['/password-reset']);
  }
}
