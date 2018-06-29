import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaAcessosPage } from './lista-acessos';

@NgModule({
  declarations: [
    ListaAcessosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaAcessosPage),
  ],
})
export class ListaAcessosPageModule {}
