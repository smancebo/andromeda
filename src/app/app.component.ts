import { Component } from '@angular/core';
import { AlertSettings } from '@jaspero/ng2-alerts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Andromeda';
  options: AlertSettings = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    duration: 0
  };
}
