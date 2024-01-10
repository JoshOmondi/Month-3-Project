import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.myForm = this.fb.group({
      text: ['', Validators.required],
      image: ['', Validators.required],
      // Add other form controls as needed
    });
  }
}