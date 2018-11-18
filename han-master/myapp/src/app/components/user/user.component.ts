import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name : string;
  age : number;
  email : string;
  address : Address;
  hobbies : string[];
  isEdit : boolean = false;
  posts : Post;
  constructor(private dataService: DataService) { 
    console.log("User constructor running...");
  }

  ngOnInit() {
    this.name = "Jinwoo Kim 2";
    this.age = 24;
    this.email = "ypk02007@naver.com";
    this.address  = {
      street : 'A street',
      city : 'B city',
      state : 'C state'
    }
    this.hobbies = ["Playing video game", "Reading comics"];

    this.dataService.getPost().subscribe((posts) => {
      this.posts = posts;
    });
  }
  onClick() {
    this.name = "Jinwoo Kim 3";
  }
  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(index) {
    this.hobbies.splice(index,1);
  }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}
interface Address {
  street : string,
  city : string,
  state : string
}
interface Post {
  id : number,
  title : string,
  sbody : string,
  userId : number
}