import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  // Define your form property here
  updateUserForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form in the constructor
    this.updateUserForm = this.fb.group({
      // Define your form controls here
    });
  }

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  // Define your form submission logic here
  updateUser() {
    // ...
  }
}
