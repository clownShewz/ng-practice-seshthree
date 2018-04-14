import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { DatatableComponent } from '../datatable/datatable.component';
import { LoginComponent } from '../login/login.component';
import { Routes, Router, RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { FormatNavLinkPipe } from '../pipes/format-nav-link.pipe';
import { CoreService } from './core.service';



const coreRoutes: Routes = [
  {path: 'datatable' , component: DatatableComponent },
  {path: 'login' , component: LoginComponent, data: {navlinks: ['login', 'datatable']} }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(coreRoutes, { enableTracing: true}),
    ReactiveFormsModule
  ],
  declarations: [
      CoreComponent,
      LoginComponent,
      MenuComponent,
      DatatableComponent,
      FormatNavLinkPipe
  ],
  providers: [
    CoreService
  ],
  exports: [
    RouterModule,
    CoreComponent
  ]
})

export class CoreModule { }
