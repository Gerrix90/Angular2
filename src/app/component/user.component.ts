import { Component } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html' ,
  providers: [PostService]
})
export class UserComponent  { 
  name: string; 
  email: string;
  adress: adress;
  hobbies: String[];
  showHobbies: Boolean;
  posts: Post[];

  constructor(private postService : PostService){
    this.name ="Jahja Trifunovic";
    this.email = "jahja.trifunovic@gmail.com";
    this.adress = {
        street : 'Geteova 22', 
        city : "Belgrade", 
        state : "Serbia"
    }
    this.hobbies = ["Music", "Movie", "Reading"];
    this.postService.getPosts().subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
    });
  }
    showOrHideHobbies(){
        if(this.showHobbies){
        this.showHobbies = false;
        }else{
            this.showHobbies = true;
        }
    }
    addHobby(hobby:string){
        this.hobbies.push(hobby);
    }
    deleteHobby(i:number){
        this.hobbies.splice(i, 1);
    }
 
}
 interface adress{
      street:string;
      city: string;
      state: string;
  }
  interface Post{
      id:number;
      title:string;
      body:string;
  }