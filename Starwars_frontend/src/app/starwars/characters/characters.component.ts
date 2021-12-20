import { Component, OnInit } from '@angular/core';
import { Character } from './character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characterList : Character[] = [];
  searchText: string = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.characterList = [
      {id:1,name:"Luke Skywalker", icon:'sports_martial_arts'},
      {id:2,name:"C-3PO", icon:'smart_toy', color:'gold'},
      {id:3,name:"R2-D2", icon:'android', color:'blue'},
      {id:4,name:"Darth Vader", icon:'sentiment_neutral', color:'black'},
      {id:5,name:"Leia Organa", icon:'face'},
      {id:6,name:"Owen Lars", icon:'nordic_walking'},
      {id:7,name:"Beru Whitesun lars", icon:'directions_run'},
      {id:8,name:"R5-D4", icon:'android', color:'red'},
      {id:9,name:"Biggs Darklighter", icon:'sports_motorsports'},
      {id:10,name:"Obi-Wan Kenobi", icon:'self_improvement'},    
  ]
  }

  // Navigate to details page
  navigateToDetails(id:number):void{
    this.router.navigate(['/people/details',id ]);
  }

}
