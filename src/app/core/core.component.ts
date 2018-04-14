import { Component, OnInit } from '@angular/core';
import { CoreService } from './core.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  title: string;

  constructor(coreData: CoreService) {
     this.title = coreData.title;
   }

  ngOnInit() {
  }

}
