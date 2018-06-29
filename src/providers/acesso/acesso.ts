import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AcessoProvider {


  constructor(public http: HttpClient) {
    console.log('Hello AcessoProvider Provider');
  }

  obterAcessos(){
    return this.http.get('http://127.0.0.1:8000/acessos/acessos');
  }

}
