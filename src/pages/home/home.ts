import { Component } from '@angular/core';
import { GithubProvider } from '../../providers/github/github'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  informacion:any=[];

  constructor(private _github: GithubProvider) {

  }

  funcionDojo(){
    console.log("Dojo Ionic");
    this._github.buscarUsuario("vivianalondo").then(
      (data) => {
        this.informacion=data;
        console.log(this.informacion);
      }
    );
  }

}
