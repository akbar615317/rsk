import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>  {{name}} </h1>
<button (click)="onClick()" type="button">
Click me

</button>
<h1> {{greetings}} </h1>

    <p>
      test works!
    </p>
  `,
  styles: [`
  h1 {    
    text-align: center;
    font-size: 50px;
    color: red;
   }
   p{
    text-align: center;
    font-size: 50px;
    color: yellow;
   } 
  
  `]
  
})
export class TestComponent implements OnInit {

  public name = "Test12";

  public greetings="";
  constructor() { }
  onClick()
  {
    this.greetings="welcome to 2 way binding"
    //console.log("two way binding");
  }

  ngOnInit(): void {
  }

}
