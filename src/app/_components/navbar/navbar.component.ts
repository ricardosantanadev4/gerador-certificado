import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
    this.menssagem();
  }

  menssagem() {
    console.log('Meu navbar incializou! (dentro de uma função)');
  }
}
