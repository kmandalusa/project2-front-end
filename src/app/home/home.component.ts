import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <nav class="navbar">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/hotel.jpg">
        </a>
      </div>
    </nav>
  `,
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
