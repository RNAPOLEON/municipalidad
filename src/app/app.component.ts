import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./commponets/menu/menu.component";
import { MainComponent } from "./commponets/main/main.component";
import { FixedComponent } from "./commponets/fixed/fixed.component"; 
import { GridOneComponent } from "./commponets/grid-one/grid-one.component";
import { ContentComponent } from "./commponets/content/content.component";
import { FixedVideoComponent } from './commponets/fixed-video/fixed-video.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    MainComponent,
    FixedComponent,
    GridOneComponent,
    ContentComponent,
    FixedVideoComponent,
    FontAwesomeModule 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'muni';
}
