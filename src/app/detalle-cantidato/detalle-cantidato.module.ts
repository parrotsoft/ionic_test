import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleCantidatoPage } from './detalle-cantidato.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCantidatoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalleCantidatoPage]
})
export class DetalleCantidatoPageModule {}
