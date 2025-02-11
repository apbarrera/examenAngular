import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { Posts } from '../../interfaz/posts';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  imports:[],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Posts[]=[]

  constructor(
    private service: RecursosService,
    private route: Router,
  ) {
    this.service.obtenerPosts().subscribe(response =>{
        this.posts = response as Posts[];
    })
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  obtenerId(id: number) {
    this.route.navigate(['posts',id])
  }
}