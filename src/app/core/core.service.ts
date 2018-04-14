import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {
  public componentList: NavLinks[]= [{name: 'login', route: ''}, {name: 'datatable', route: ''}];
  public title = 'Practice Session Three';
  constructor() { }

}


