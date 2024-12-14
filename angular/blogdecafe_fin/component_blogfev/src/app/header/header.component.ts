import { Component } from '@angular/core';
import { ConteneorComponent } from "./conteneor/conteneor.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ConteneorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
