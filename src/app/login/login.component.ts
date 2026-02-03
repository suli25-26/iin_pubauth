import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly auth = inject(AuthService)
  private readonly builder = inject(FormBuilder)
  private readonly router = inject(Router)

  protected loginForm = this.builder.group({
    name: [''],
    password: ['']
  })

  login() {
    this.auth.login(this.loginForm.value).subscribe({
      next: (result: any) => {
        if(result.success) {
          console.log(result.data[0].token)
          const token = result.data[0].token
          localStorage.setItem("token", token)
          this.auth.loginSuccess()
          this.router.navigate(['drink'])
        }else {
          console.log('Nem-nem!')
        }

      },
      error: () => {}
    })
  }

}
