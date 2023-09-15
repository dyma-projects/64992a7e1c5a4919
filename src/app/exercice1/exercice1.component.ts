import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  public hello = 'Bonjour';
  public inputType = 'text';
  public inputValue = '';

  public inputChange (event: any) {
    this.inputValue = event.target.value;
  }

}
