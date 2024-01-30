import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeManagerAngular';

  collapse = signal(false);

  sideNavWidth= computed(()=>this.collapse()?'250px':'65px')

}
