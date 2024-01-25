import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service'; 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      text: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  onSubmit() {
    this.postService.createPost(this.myForm.value).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.error(error)
    );
  }
}
