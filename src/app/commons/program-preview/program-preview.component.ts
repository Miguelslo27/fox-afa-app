import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'program-preview',
  templateUrl: './program-preview.component.html',
  styleUrls: ['./program-preview.component.scss']
})
export class ProgramPreviewComponent implements OnInit {

  @Input() thumbnail: string;
  @Input() programTitle: string;
  @Input() isLive: boolean;

  constructor() { }

  ngOnInit() {
  }

}
