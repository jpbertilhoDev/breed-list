import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BreedsComponent } from './views/home/breeds/breeds.component';
import { BreedsDetailComponent } from './views/home/breeds/breeds-detail/breeds-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'breeds', component: BreedsComponent },
    { path: 'breeds/detail', component: BreedsDetailComponent }

];
