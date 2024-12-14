import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WidgetsComponent } from './components/widgets/widgets.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedComponent, SidebarComponent, WidgetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components_project';
}
