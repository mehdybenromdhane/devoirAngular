import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent implements OnInit {



position : string;
number:number;
cout:number;
  
  constructor() { }

  ngOnInit(): void {
  }



  estimer(){
   if (this.position=='haut'){
     if(this.number <= 30 ){
       this.cout=10;
     }
     if(this.number > 30 ){
      this.cout=20;
    }
 }

 if (this.position=='bas'){
  if(this.number <= 30 ){
    this.cout=5;
  }
  if(this.number > 30 ){
   this.cout=15;
 }
}
return this.cout;
  }
}
