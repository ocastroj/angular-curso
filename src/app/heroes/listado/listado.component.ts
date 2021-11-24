import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Thor', 'Captain America', 'Ironman']
  heroeBorrado: string = '';

  borrarHeroe(){
    //this.heroes.splice(0, 1)
    //console.log(this.heroes)\
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
