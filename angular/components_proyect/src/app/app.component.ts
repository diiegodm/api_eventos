import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ListcomponentComponent } from './components/header/listcomponent/listcomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components_proyect';
}
