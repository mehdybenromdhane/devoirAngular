import { Component, Input, OnInit } from '@angular/core';
import { Articles } from '../model/articles';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  @Input() article: Articles;

    @Input() nbArticles:number;
  ngOnInit(): void {

  }

}
