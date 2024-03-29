import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crocs-details',
  templateUrl: './crocs-details.component.html',
  styleUrls: ['./crocs-details.component.scss']
})

export class CrocsDetailsComponent implements OnInit {
  @Input('crocsDetails') details: { img: String, name: String, price: String} = <any>{};
  
  constructor() { 
  }

  ngOnInit(): void {
    
  }

}
