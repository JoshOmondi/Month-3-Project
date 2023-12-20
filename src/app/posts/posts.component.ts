// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Posts } from 'src/app/interface/post';
// import { User, UserDetails } from 'src/app/interface/user';
// import { PostService } from 'src/app/services/post.service';
// import { Router } from '@angular/router';
// import { UserService } from 'src/app/services/user.service';
// import { AuthService } from 'src/app/services/auth.service';

// @Component({
//   selector: 'app-posts',
//   templateUrl: './posts.component.html',
//   styleUrls: ['./posts.component.css'],
// })
// export class PostsComponent {
//   visible = true;
//   notVisible = false;
//   loggedIn = true;
//   hidden = true;
//   filter = '';
//   userID!: string;
//   createPostForm!: FormGroup;
//   posts!: Posts[];
//   users!: User[];
//   userDetails!: UserDetails;
//   isFormVisible: boolean = true;
//   showProfileDropdown: boolean = false;

//   updatePostForm!: FormGroup;
//   postt!: Posts;
//   postID: string = '';
//   updatePostID: string = '';

//   constructor(
//     private postService: PostService,
//     private formBuilder: FormBuilder,
//     private router: Router,
//     private userService: UserService,
//     private authService: AuthService
//   ) {
//     this.createPostForm = this.formBuilder.group({
//       text: ['', [Validators.required]],
//       image: ['', [Validators.required]],
//     });
//     this.loggedIn = authService.isLoggedIn();
//   }
//   loggedInTrue = localStorage.getItem('loggedIn');

//   ngOnInit() {
//     this.getPosts();
//     this.getUsers();

//     if (this.authService.isLoggedIn()) {
//       this.authService.getUserDetails().subscribe(
//         (userDetails) => {
//           console.log(userDetails[0].fullName);

//           this.userDetails = userDetails[0];
//           this.userID = userDetails[0].userID;
//           this.getPosts();
//         },
//         (error) => {
//           console.error('Error getting user details:', error);
//         }
//       );
//     }
//   }

//   getPosts() {
//     this.postService.getPosts().subscribe(
//       (response) => {
//         this.posts = response;
//       },
//       (error) => {
//         console.error('Error fetching tours:', error);
//       }
//     );
//   }

//   createPost() {
//     let createPost: Posts = this.createPostForm.value;
//     this.postService.createPost(createPost).subscribe(
//       () => {
//         this.getPosts();
//         // this.loadProducts();
//         this.visible = true;
//       },
//       (error) => {
//         console.error('Error creating products:', error);
//       }
//     );
//   }

//   getUsers() {
//     this.userService.getUsers().subscribe(
//       (response) => {
//         this.users = response;
//       },
//       (error) => {
//         console.error('Error fetching users:', error.error.message);
//       }
//     );
//   }

//   loadPosts(): void {
//     this.postService.getPosts().subscribe(
//       (posts) => {
//         this.posts = posts;
//         this.loadPosts();
//       },
//       (error) => {
//         console.error('Error fetching posts:', error);
//       }
//     );
//   }

//   loadUsers(): void {
//     this.userService.getUsers().subscribe(
//       (users) => {
//         this.users = users;
//         this.loadUsers();
//       },
//       (error) => {
//         console.error('Error fetching tours:', error);
//       }
//     );
//   }

//   deletePost(postID: string): void {
//     alert('Are you sure You want to delete, this action is irreversible');
//     this.postService.deletePost(postID).subscribe(
//       () => {
//         this.loadPosts();
//       },
//       (error) => {
//         console.error('Error deleting postt:', error);
//       }
//     );
//   }

//   deleteUser(userID: string): void {
//     alert('Are you sure You want to delete, this action is irreversible');
//     this.userService.deleteUser(userID).subscribe(
//       () => {
//         this.loadUsers();
//       },
//       (error) => {
//         console.error('Error deleting Tour:', error);
//       }
//     );
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})

export class PostsComponent implements OnInit {
  posts!: FormGroup;

  ngOnInit() {
    this.posts = new FormGroup({
      firstName: new FormControl(),
    });
  }
}

