import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecursosService } from '../../servicios/recursos.service';
import { Posts } from '../../interfaz/posts';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent  {
  id:number = 0;

  post: Posts | undefined;

  constructor(
    private service: RecursosService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe(params => {
      const paramId = params.get('id');
      this.id = paramId ? +paramId : 0;
      console.log(this.id);
    });

    this.service.obtenerDetallePosts(this.id).subscribe(details =>{
        this.post = details as Posts;
    })

  }

}
