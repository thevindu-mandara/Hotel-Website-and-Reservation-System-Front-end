import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})
export class AccommodationComponent implements OnInit, OnDestroy {
  tulip: string[] = [
    '../../../assets/images/IMG_3121.heic',
    '../../../assets/images/IMG_3135.heic',
    '../../../assets/images/IMG_3036.heic'
  ];
  lunetta: string[] = [
    '../../../assets/images/IMG_3047.heic',
    '../../../assets/images/IMG_3054.jpg',
    '../../../assets/images/IMG_3057.heic'
  ];
  currentIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startImageCarousel();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startImageCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.tulip.length;
      this.currentIndex = (this.currentIndex + 1) % this.lunetta.length;
    }, 3000);
  }
}
