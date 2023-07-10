import { Component } from '@angular/core';
import { HeroesService, Heroes } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

})



export class HeroesComponent {
  heroes:any[]=[];
  

  ngOnInit(): void{
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  constructor(private _heroesService:HeroesService, private Router:Router){
    
  }
  verHeroe(idx: number){
    console.log(idx);
    this.Router.navigate(['/heroe', idx]);
   }

   
}
