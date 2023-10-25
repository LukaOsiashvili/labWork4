import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labWork';

  user: User[] = [
    
    {
      id: 0,
      name: "Luka",
      email: "someone@example.com"
    },

    {
      id: 1,
      name: "Tamari",
      email: "tamari@example.com"
    },

    {
      id: 2,
      name: "zura",
      email: "zura@example.com"
    },
    {
      id: 3,
      name: "Sofo",
      email: "sofo@example.com"
    },
  ]


}
