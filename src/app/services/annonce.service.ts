import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Annonce } from '../model/Annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {


  annonces:Annonce[];
  constructor( private http:HttpClient) { }


  getAnnonce(){
  return this.http.get<Annonce[]>('http://localhost:3000/annonces');
}}