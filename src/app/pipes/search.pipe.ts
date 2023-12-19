import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from '../interface/post';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(posts: Posts[], text: string): Posts[] {
    if (!posts || text == '') {
      return posts;
    }
    const filtered: Posts[] = [];
    for (let post of posts) {
      if (post.text.toLowerCase().includes(text.toLowerCase())) {
        filtered.push(post);
      }
    }
    return filtered;
  }
}
