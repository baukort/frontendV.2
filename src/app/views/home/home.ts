import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  images = [
    'assets/images/proyectos/1.png',
    'assets/images/proyectos/2.png',
    'assets/images/proyectos/3.png',
    'assets/images/proyectos/5.png',
  ];

  currentImage = this.images[0];
  private index = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.images.length;
      this.currentImage = this.images[this.index];
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
