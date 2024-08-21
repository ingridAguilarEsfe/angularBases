import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'impulsoEsfe';
  contador: number = 10;

  incremento():void{

    this.contador = this.contador +1;

  }

  decrementar():void{
    this.contador = this.contador-1;
  }

  resetear():void{
   this.contador = 10;
  }
}
