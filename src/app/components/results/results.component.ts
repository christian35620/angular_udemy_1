import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

    heroes: Heroe[] = [];
    termino: string;

    constructor(private activatedRoute: ActivatedRoute,
                  private _heroesService: HeroesService,
                  private router: Router
      ) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe( params => {
            this.heroes = this._heroesService.buscarHeroes( params['termino'] );
            this.termino= params['termino'];
            console.log(this.heroes);
      } );
      }
    
    //   habria que modificar para que lleve a la pagina del heroe, hay que arreglarlo
      verHeroe(idx:number){
        this.router.navigate( ['/heroe', idx]);
      }

}
