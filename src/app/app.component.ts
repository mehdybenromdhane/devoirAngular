import { Component, OnInit, Output } from '@angular/core';
import { Articles } from './model/articles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'devoir';


   article:Articles[];
  @Output()
  nbArticles:number;



 

ngOnInit(): void {




 this.article=[
    {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est ....',auteur:'Med Taher',date:'12/12/2005'},
    {titre:'Les nouveaux parents',contenu:'Les nouveauxparents....',auteur:'Ahmed Said',date:'11/11/2018'},
    {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucherun emploi ...',auteur:'Marie Elsa',date:'02/04/2017'}
    ]  

}


  
  
}