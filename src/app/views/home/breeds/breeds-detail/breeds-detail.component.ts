import { Component } from '@angular/core';
import { Facts } from '../../../../interfaces/facts.interface';
import { Breeds } from '../../../../interfaces/breeds.interface';
import { BreedsService } from '../../../../services/breeds.service';
import { HomeComponent } from '../../home.component';

@Component({
  selector: 'app-breeds-detail',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './breeds-detail.component.html',
  styleUrl: './breeds-detail.component.css'
})
export class BreedsDetailComponent {
  fact: Facts[] = []
  breed: Breeds = {} as Breeds

  constructor(  private breedsService: BreedsService, ) {}

    ngOnInit(): void {
      this.breed = history.state;
      console.log(this.breed);
    }
}
