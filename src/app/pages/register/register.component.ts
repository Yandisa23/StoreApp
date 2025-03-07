import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb:FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',[Validators.required]]
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log('Registering with:', this.registerForm.value);
      // Perform registration logic
    }
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
