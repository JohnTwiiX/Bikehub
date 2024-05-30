import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { HttpBackendService } from '../../services/http-backend.service';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { Product } from '../../shared/Product';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, BackButtonComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  selectedTab: string = 'All';
  items!: Product[];

  constructor(private httpBackendService: HttpBackendService) {
    this.httpBackendService.getProducts(this.selectedTab).subscribe({
      next: (value: any) => {
        console.log(value);
        this.items = value.products;
      },
      error: err => console.error('GET PRODUCTS ERROR: ', err)
    })
  }

  // selectTab(tab: string) {
  //   this.selectedTab = tab;
  //   this.httpBackendService.getProducts(this.selectedTab).subscribe({
  //     next: (value) => {
  //       console.log(value);
  //     },
  //     error: err => console.error('GET PRODUCTS ERROR: ', err)
  //   })
  // }
}
