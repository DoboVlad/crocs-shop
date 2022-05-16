import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crocs-details',
  templateUrl: './crocs-details.component.html',
  styleUrls: ['./crocs-details.component.scss']
})

//ce inseamna "!" aici si dc nu merge initializerea fara
export class CrocsDetailsComponent implements OnInit {
  @Input('crocsDetails') details: { img: String, name: String, price: String} = <any>{};
  
  constructor() { 
    //this.details = {img: '', name: '', price: ''};
  }

  ngOnInit(): void {
    console.log(this.details)

  }

}
