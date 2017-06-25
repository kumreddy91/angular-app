import { Component } from '@angular/core';
import { PostService} from  '../services/post.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: 'user.component.html'  ,
  providers: [PostService]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postService: PostService){
      this.name = 'Sam Smith';
      this.email = 'john@gmail.com';
      this.address = {
        street :'12 Main St',
        city:'Frisco',
        state:'MA'
      }
      this.hobbies = ['Music', 'Movies', 'Sports'];
      this.showHobbies = false;
      this.postService.getPosts().subscribe(posts => {
          this.posts = posts;
      }
      );
      
  }

  toggleHobbies(){
      if(this.showHobbies == true){
          this.showHobbies = false;
      }else{
      this.showHobbies= true;
      }
  }

  addHobby(hobby:string){
      console.log(hobby);
      this.hobbies.push(hobby);
  }

  deleteHobby(i:number){
      this.hobbies.splice(i, 1);
  }

 }

 interface Address{
     street: string;
     city: string;
     state: string;
 }
 
 interface Post{
     id: number;
     title: string;
     body: string;
 }
