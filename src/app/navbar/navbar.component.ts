import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isDropdownVisible = false;

  toggleDropdown(event: Event): void {
    event.preventDefault(); 
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
