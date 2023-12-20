import { Component, OnInit} from '@angular/core';
import { PostService } from '../services/post.service';
import { Posts } from '../interface/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filter = '';
  // @Input() Filteredposts: any[] = [];
  // @Input() searchQuery: string = '';

  posts!: Posts[];
  constructor(private PostService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }
  postss:any[]=[]

  getPosts() {
    this.PostService.getPosts().subscribe((data) => {
      this.postss=data
      console.log(this.postss);
      
    });
  }
}

// getUser() {
//   this.UserService.getUser
// }
