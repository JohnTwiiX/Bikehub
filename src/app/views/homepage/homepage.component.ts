import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ImageSliderComponent } from '../../components/image-slider/image-slider.component';
import { MatIconModule } from '@angular/material/icon';
import { ShopComponent } from '../shop/shop.component';
import { PaypalButtonComponent } from '../../components/paypal-button/paypal-button.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ImageSliderComponent, MatIconModule, RouterModule, ShopComponent, PaypalButtonComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  title: any
  openShop: boolean = false;
  constructor(private readonly route: ActivatedRoute) {
    this.title = this.route.snapshot.routeConfig?.title || ''
  }

  selectShop() {
    this.openShop = true;
  }
}
