import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpBackendService } from '../../services/http-backend.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = ''
  password: string = ''

  constructor(private httpBackendService: HttpBackendService) { }

  login() {
    this.httpBackendService.login(this.email, this.password).subscribe({
      next: (msg) => {
        console.log(msg);
      },
      error: (error) => {
        console.error(error);

      }
    })
  }

}
