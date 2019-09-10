import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  // any is basically saying we can store any type of value to this variable. No type safety.
  values: any;

// This is how we call our API and how we are going to get our values
  constructor(private http: HttpClient) { }

  // Initializes the component
  ngOnInit() {
    this.getValues();
  }

  getValues() {

    // Observable is a stream of data we get from our API, In order to get contents of an observable out we need to subscribe to it.
    // subscribe(next?: (value: Object) => ... ) <-- what do we do next when we recieve this observable? we are going to get a response back from server.
    
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      // This is where we are going to store our response that comes back.
      this.values = response;

      // Since we are making a call to our api there is always potential for something to go wrong.
    }, error => {
      console.log(error);
    })
  }
}
