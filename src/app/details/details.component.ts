import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  names = {
    rank : 1 ,
    studentName: "Prudhvi"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
