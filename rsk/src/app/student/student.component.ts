import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-student',
  selector: '.app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public studentName = "Rajesh";

  constructor() { }

  ngOnInit(): void {
  }

}
