import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemDialogComponent } from './shop-item-dialog.component';

describe('ShopItemDialogComponent', () => {
  let component: ShopItemDialogComponent;
  let fixture: ComponentFixture<ShopItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopItemDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
