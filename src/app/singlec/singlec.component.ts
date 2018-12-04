import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singlec',
  templateUrl: './singlec.component.html',
  styleUrls: ['./singlec.component.css']
})
export class SinglecComponent implements OnInit {
  data:any;


  constructor() {

   }

  ngOnInit() {
    this.data=[{"Seller":"XYZ","Rate":"500/Piece","image":'Screenshot from 2018-08-07 15-29-07.png1534953607615.jpg'}]

 
  }

}
