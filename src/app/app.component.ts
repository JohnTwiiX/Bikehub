import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { HttpBackendService } from './services/http-backend.service';
import { CommonModule, Location, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LoginComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'BikeHub';
  get isShop() {
    return this.location.path() === '/shop' ? 'hide' : '';
  }

  constructor(private httpBackendService: HttpBackendService, @Inject(PLATFORM_ID) private platformId: Object, private location: Location) {

    console.log(this.location.path());
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.httpBackendService.getToken().subscribe({
        next: (value) => {
          console.log(value);
        }
      });
    }

  }
}
