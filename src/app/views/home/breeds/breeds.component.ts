import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { Breeds } from '../../../interfaces/breeds.interface';
import { Facts } from '../../../interfaces/facts.interface';
import { BreedsService } from '../../../services/breeds.service';
import { Router } from '@angular/router';
import { CardBreedsComponent } from "./card-breeds/card-breeds.component";
import { HomeComponent } from '../home.component';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-breeds',
    standalone: true,
    templateUrl: './breeds.component.html',
    styleUrl: './breeds.component.css',
    imports: [CardBreedsComponent, HomeComponent, NgFor]
})
export class BreedsComponent implements OnInit {
  breeds: Breeds[] = []
  @Output() selectedBreed = new EventEmitter<Breeds>();
  private subscription: Subscription = new Subscription();

  constructor(
    private breedsService : BreedsService, 
    private router: Router,
   ) {}
  
  ngOnInit(): void {
    this.subscription.add(
    this.breedsService.getBreeds().subscribe(response => {
      this.breeds = response.data;
      console.log(this.breeds);
    })
  );
}

  detailBreed(breed: Breeds){
    this.selectedBreed.emit(breed);
    this.router.navigate(['breeds/detail'], {state: breed}) ;
    console.log(this.breeds)
  }

  ngOnDestroy() {
   this.subscription.unsubscribe(); 
  }

}