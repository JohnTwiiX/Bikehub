import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../shared/Product';
import { MatDialog } from '@angular/material/dialog';
import { ShopItemDialogComponent } from '../shop-item-dialog/shop-item-dialog.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() item!: Product;

  constructor(public dialog: MatDialog) { }

  openShopItemDialog() {
    this.dialog.open(ShopItemDialogComponent, { data: this.item, width: '60%' });
  }
}
