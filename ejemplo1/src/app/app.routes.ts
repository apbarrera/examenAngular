import { Routes } from '@angular/router';
import { PostsComponent } from './shared/posts/posts.component';
import { PostDetailComponent } from './shared/post-detail/post-detail.component';
import { CardAlbumComponent } from './shared/card-album/card-album.component';

export const routes: Routes = [
    {path:'cards',component:CardAlbumComponent},
    { path: 'posts', component: PostsComponent },
    { path: 'posts/:id', component: PostDetailComponent }
];
