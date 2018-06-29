import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheAcessosPage } from './detalhe-acessos';

@NgModule({
  declarations: [
    DetalheAcessosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheAcessosPage),
  ],
})
export class DetalheAcessosPageModule {}
