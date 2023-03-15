import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', character: 'nice', handle: '@nice'},
      { id: 13, name: 'Bombasto', character: 'naive', handle: '@bomba' },
      { id: 14, name: 'Celeritas', character: 'star', handle: '@cele' },
      { id: 15, name: 'Magneta', character: 'noble', handle: '@maggy' },
      { id: 16, name: 'RubberMan', character: 'smooth', handle: '@rubby' },
      { id: 17, name: 'Dynama', character: 'explosive', handle: '@dyna' },
      { id: 18, name: 'Dr. IQ', character: 'intelligent', handle: '@iq' },
      { id: 19, name: 'Magma', character: 'firey', handle: '@maggie' },
      { id: 20, name: 'Tornado', character: 'flarry', handle: '@torntodike' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
