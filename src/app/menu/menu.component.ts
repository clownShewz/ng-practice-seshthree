import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
   navLinks: NavLinks[];

  constructor(coreData: CoreService) {
    this.navLinks = coreData.componentList;
  }


  ngOnInit() {

  }

}
