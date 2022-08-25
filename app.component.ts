import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "apple";
  arr = [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      id: 2,
      email: "george.bluth@reqres.in",
      first_name: "lita",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      id: 3,
      email: "george.bluth@reqres.in",
      first_name: "Merlyn",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      id: 4,
      email: "george.bluth@reqres.in",
      first_name: "cruz",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/4-image.jpg"
    }
  ];
}

//
