import { Component } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNombres: string[]=['Spiderman','Ironman','Hulk','Thor'];

  public deleteHeroe?:string;

  borrarHeroe():void{
    this.deleteHeroe = this.heroesNombres.pop();
  }
}
