import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Breeds } from '../../../../interfaces/breeds.interface';
import { Router } from '@angular/router';
import { BreedsService } from '../../../../services/breeds.service';
import { Facts } from '../../../../interfaces/facts.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-breeds',
  standalone: true,
  imports: [],
  templateUrl: './card-breeds.component.html',
  styleUrl: './card-breeds.component.css'
})
export class CardBreedsComponent {

  constructor(private route: Router, private breedsService: BreedsService) {

  }

  @Input() breed = {} as Breeds;
  @Input() fact = {} as Facts;
  @Output() breadEmitter = new EventEmitter<Breeds>();
  private subscription: Subscription = new Subscription();
  randomFact: string | null = null;


  detailButton(breed: Breeds) {
    this.breadEmitter.emit(breed);
    console.log(breed)
  }

  getFacts(fact: Facts) {
    console.log(this.fact)
  }

  getRandomFacts() { //Chama fatos aleatorios sobre as raças descrita na API.
    const factsLimit = 5;
    this.subscription.add(
    this.breedsService.getRandomFacts(factsLimit).subscribe(response => {
      const randomIndex = Math.floor(Math.random() * response.data.length);
      this.randomFact = response.data[randomIndex].fact;
    }, error => {
      console.error('Error fetching facts', error);
    })
  );
}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}