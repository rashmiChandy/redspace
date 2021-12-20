import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StarwarsService } from 'src/app/services/starwars.service';
import { CharacterDetails } from './character-details';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  characterDetails:Observable<CharacterDetails> | undefined;
  panelOpenState:boolean=false;
  speciesPanelOpenState:boolean=false;

  constructor(private starwarsService:StarwarsService, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    // Invoking API get request on screen load
    this.characterDetails = this.starwarsService.getDetails(this.activatedRouter.snapshot.params['id']);
  }

}
