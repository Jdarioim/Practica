import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

})



export class HeroesComponent implements OnInit{
  heroes:any[]=[];
  

  ngOnInit(): void{
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  constructor(private _heroesService:HeroesService, private userService: UserService, private Router:Router){
    
  }
  verHeroe(idx: number){
    console.log(idx);
    this.Router.navigate(['/heroe', idx]);
   }

   onClick() {
    this.userService.logout()
      .then(() => {
        this.Router.navigate(['/register']);
      })
      .catch(error => console.log(error));
  }

}
