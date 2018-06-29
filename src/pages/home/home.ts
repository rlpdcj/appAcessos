import { AcessoProvider } from './../../providers/acesso/acesso';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  acessos 

  constructor(public navCtrl: NavController, public provedor: AcessoProvider) {

  }

  ionViewDidLoad(){
    this.provedor.obterAcessos()
    .subscribe(
      (data)=> {this.acessos = data;},
      (error)=> {console.log(error);}
    )
  }

}
