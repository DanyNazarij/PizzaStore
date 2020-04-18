import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OurPizzaStore';
  lat: number = 49.8477485;
  lng: number = 24.0155463;
}


// <agm-map [latitude]="lat" [longitude]="lng">
//   <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
// </agm-map>
