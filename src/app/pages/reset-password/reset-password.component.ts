import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class ResetPasswordComponent {

  resetForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetForm = this.fb.group({
      email:['',[Validators.required,Validators.email]]
    });
  }

  resetPassword() {
    if (this.resetForm.valid) {
      console.log('Reset password for:', this.resetForm.value);
      // Perform password reset logic
    }
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}