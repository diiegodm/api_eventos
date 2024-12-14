import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { characters } from './utils';
import { personas } from './utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'Eventos & Control flow';

 personas = personas
 charactersList = characters;
 selectValue = "";
 inputValue ="";
 palabra = "";
 
  
  toggleTheme() {
  }


  handleClick() {
   alert("click click click") 
  }

  handleChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.selectValue =value
  }

  handleInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputValue = value
  }

  handleMouseOver() {
    alert("has pasado por encima ")
  }  

  handleKeydown(event: KeyboardEvent) {


  const value = "hiciste el evento"
    this.palabra = value

  }

  handEliminar (idx:any){
    this.charactersList = this.charactersList.filter((character: any, index )=> index !== idx)
  }


}
   