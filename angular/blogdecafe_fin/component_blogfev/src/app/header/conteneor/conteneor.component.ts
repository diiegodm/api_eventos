import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-conteneor',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './conteneor.component.html',
  styleUrl: './conteneor.component.css'
})
export class ConteneorComponent {

}
