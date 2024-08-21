import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list-personajes.component.html',
  styleUrl: './list-personajes.component.css'
})
export class ListPersonajesComponent {

@Input()
public characterList : Character[]=[{
  name: 'Trunks',
  power: 10
}];

//onDelete = index
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{
  //TODO:emitir id del personaje
  if(!id) return;
  this.onDelete.emit(id);

}

}
