import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule, CommonModule],
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
