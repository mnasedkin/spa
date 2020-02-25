import {Component, Input, OnInit} from '@angular/core';

/*interfase for button*/
export interface AnchorLink {
  title: string
  targetId: string
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // @Input() title: 'testTitle'
  // @Input() targetId: '#id'

  constructor() {
  }

  ngOnInit(): void {
  }

}
