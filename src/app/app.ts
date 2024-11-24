import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.html',
  styleUrls: ['./app.Component.scss']
})
export class TabGroupBasicExample {
  // Listen for scroll events
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const header = document.querySelector('.header') as HTMLElement;
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}
