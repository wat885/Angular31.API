import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  posts:any[];


  // users: any[];
  


  constructor(private httpClient:HttpClient) { }


  ngOnInit(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(result =>{
        this.posts= result as any[];
      })
    // this.httpClient
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .subscribe(result =>{
    //     this.users= result as any[];
    //   })

  }

}
