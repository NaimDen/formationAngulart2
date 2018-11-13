import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface IQcm {
 nbOiseau?: number;
 coursFavoris?: string;
 decorateur?: string;

}


@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.scss']
})


export class QcmComponent implements OnInit {
  @Input()
  qcm: IQcm = {};

  constructor() { }

  ngOnInit() {


  }
  onSubmit(f) {
   console.log('Vous avez entré : ' + f.value);
  }

}
