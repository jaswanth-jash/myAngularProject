import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `Team name : Royals <app-user></app-user>
     jaswanth(C),
     pooja,
     nikitha,
     pavithra,
     rakshith`,
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
