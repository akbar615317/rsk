import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>  {{name}} </h1>
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

  public name = "Test";
  constructor() { }

  ngOnInit(): void {
  }

}
