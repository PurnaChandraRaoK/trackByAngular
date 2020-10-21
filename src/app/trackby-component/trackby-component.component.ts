import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby-component',
  templateUrl: './trackby-component.component.html',
  styleUrls: ['./trackby-component.component.scss']
})
export class TrackbyComponentComponent implements OnInit {

  fruits = []

  constructor() { }

  ngOnInit(): void {

    this.fruits = [

      { name: "Mango", id: 1 },
      { name: "Apple", id: 2 },
      { name: "Banana", id: 3 },
      { name: "Strawberry", id: 4 }

    ]
 
  }

  processFruits(){

    // this.fruits.push({ name: "grapes", id: 5 })
    
    this.fruits = [

      { name: "Mango", id: 1 },
      { name: "Banana", id: 3 },
      { name: "Strawberry", id: 4 },
      { name: "Apple", id: 2 }
     

    ]
  }

  trackById(index,fruit){
    return fruit.id;
  }

}
