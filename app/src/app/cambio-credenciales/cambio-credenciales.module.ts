import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioCredencialesPageRoutingModule } from './cambio-credenciales-routing.module';

import { CambioCredencialesPage } from './cambio-credenciales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioCredencialesPageRoutingModule
  ],
  declarations: [CambioCredencialesPage]
})
export class CambioCredencialesPageModule {}
