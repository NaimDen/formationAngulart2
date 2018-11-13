import { Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit, OnDestroy {
// Un evenement à emmetre à l'exterieur ou en interne
@Output()
eventCours = new EventEmitter();
@Input()
title: string;
@Input()
vignette: string;
@Input()
@Input()
information: string;
@Input()
nbVue: number;


 ngOnInit() {
  console.log('ngOnInit');
  }

  ngOnDestroy() {
  console.log('ngOnDestroy');
  }

 doSthCours(evt) {
   console.log('un cours selectionné :' +   this.title  +  'EVENT : ' + evt);
   this.eventCours.emit({title: this.title, information: this.information, vignette: this.vignette, nbVue: this.nbVue});
 }

}
