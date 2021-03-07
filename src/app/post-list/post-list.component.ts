import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {FormsModule, FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  posts:any[];
  form: FormGroup;


  // users: any[];
  


  constructor(private httpClient:HttpClient, private fb: FormBuilder) {
    this.form= this.fb.group({
      userID: '',
      title: '',
      body: ''
    })
  
   }


  ngOnInit(): void {

    this.loadPost()
    // this.httpClient
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .subscribe(result =>{
    //     this.posts= result as any[];
    //   })

    // this.httpClient
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .subscribe(result =>{
    //     this.users= result as any[];
    //   })
  }
  loadPost(){
    this.posts=[];
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(result =>{
        this.posts= result as any[];
      })
  }

  addPost(){
    const newPost = this.form.value;
    this.httpClient
      .post('https://jsonplaceholder.typicode.com/posts', newPost)
      .subscribe(result =>{
        this.form.reset();
        alert('Add Post Success !');
        this.loadPost();
      })
  }




}
