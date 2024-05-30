import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent implements OnInit {
  @Input() images!: [{ url: string; alt_text: string; }];
  slideIndex: number = 0;

  ngOnInit() {
    // this.autoSlide();
  }

  changeSlide(n: number) {
    const newIndex = (this.slideIndex + n) % this.images.length;
    this.slideIndex = newIndex < 0 ? this.images.length - 1 : newIndex;
  }

  autoSlide() {
    window.setInterval(() => {
      this.changeSlide(1);
    }, 5000);
  }

}
