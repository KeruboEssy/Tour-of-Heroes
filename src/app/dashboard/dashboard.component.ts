import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  // faCoffee = faCoffee;
  heroes: any;
  // heroes: Hero[] = [];
  title: any;
reload: any;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  // reload() {
  //   location.reload()

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes.slice(1, 5);
      console.log('my list of heroes...', this.heroes);
    });      
  }
}
