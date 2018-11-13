import { Component } from '@angular/core';
import {CoursComponent} from '../cours/cours.component';

class Cours {
  constructor(public title: string, public vignette: string, public information: string, public nbVue: number) {}
}

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-Cours.component.html',
  styleUrls: ['./liste-Cours.component.scss']
})

export class ListeCoursComponent {

  listeCours: Array<Cours>;
  constructor() {
    const cours1 = new Cours('IONIC 3', '../../assets/images/logo-ionic.png', 'Cours 2018', 9);
    const cours2 = new Cours('Angular 6', '../../assets/images/angular-logo.png', 'Avant novembre 2018', 20);
    const cours3 = new Cours('Java 9', '../../assets/images/java_logo.png', 'Pour débutants', 600);
    this.listeCours = new Array<Cours>();
    this.listeCours.push(cours1);
    this.listeCours.push(cours2);
    this.listeCours.push(cours3);

  }

  selectionCours(evt, item) {
    console.log('In selectCours');
    item.nbVue++;
  }
}
