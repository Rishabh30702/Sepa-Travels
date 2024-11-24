import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../Navbar/navbar/navbar/navbar.component";
import { FooterComponent } from "../../Footer/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.initCounters();
  }
  initCounters() {
    const counters = [
      { id: 'passengers-count', end: 5000 }, // Total passengers
      { id: 'drivers-count', end: 1200 },   // Total drivers
      { id: 'routes-count', end: 300 }      // Total routes
    ];
    counters.forEach(counter => {
      const element = document.getElementById(counter.id);
      if (element) {
        this.animateCounter(element, counter.end, 2000); // 2-second duration
      }
    });
  }
  animateCounter(element: HTMLElement, end: number, duration: number) {
    const start = 0;
    const increment = Math.ceil(end / (duration / 16.67)); // Approximation of frames per second
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      element.innerText = current.toString();
    }, 16.67); // 60 FPS interval
  }

}
