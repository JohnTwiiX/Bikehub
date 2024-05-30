import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { Product } from '../../shared/Product';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

@Component({
  selector: 'app-shop-item-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ImageSliderComponent],
  templateUrl: './shop-item-dialog.component.html',
  styleUrl: './shop-item-dialog.component.scss'
})
export class ShopItemDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ShopItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) { }
}
