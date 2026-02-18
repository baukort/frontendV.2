import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Projects } from './views/projects/projects';
import { Studio } from './views/studio/studio';
import { News } from './views/news/news';
import { Contact } from './views/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'proyectos', component: Projects },
  { path: 'estudio', component: Studio },
  { path: 'novedades', component: News },
  { path: 'contacto', component: Contact },
  { path: '**', redirectTo: '' }
];
