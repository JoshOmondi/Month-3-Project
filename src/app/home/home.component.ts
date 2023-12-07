import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
  let isMenuHidden = true;

function toggleMenu() {
  const menu = document.querySelector('.flex-col') as HTMLElement;
  if (menu) {
    isMenuHidden = !isMenuHidden;
    menu.style.display = isMenuHidden ? 'none' : 'flex';
  }
}


function navigate(route: any) {
    console.log('Navigate to:', route);
    toggleMenu();
}


