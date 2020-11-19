import { Component, OnInit } from '@angular/core';
import { AnnoncesComponent } from '../annonces/annonces.component';
import { Annonce } from '../model/Annonce';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent implements OnInit {



  annoncesList:Annonce[];
  constructor(private service: AnnonceService) { }

  ngOnInit(): void {
    this.service.getAnnonce().subscribe(
      (data: Annonce[]) => this.annoncesList = data);


  
  }

}
