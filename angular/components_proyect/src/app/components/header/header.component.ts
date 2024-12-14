import { Component } from '@angular/core';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[ListcomponentComponent] ,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
