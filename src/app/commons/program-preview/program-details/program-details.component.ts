import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  @Input() programTitle:string;
  @Input() isLive:boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
