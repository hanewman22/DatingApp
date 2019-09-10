import { Component } from '@angular/core';

// This is our root component that is being bootstrapped by our 'app.module.ts' file.
// this file is responsible for providing DATA to our view.
@Component({ // this is a decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'F.R.I.E.N.D.S';
}
