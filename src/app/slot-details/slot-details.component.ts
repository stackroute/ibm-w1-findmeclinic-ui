import { Component, OnInit,Input  } from '@angular/core';
import { Slot } from '../Slot';

@Component({
  selector: 'app-slot-details',
  templateUrl: './slot-details.component.html',
  styleUrls: ['./slot-details.component.css']
})
export class SlotDetailsComponent implements OnInit {

  @Input() slot: Slot;

  constructor() { }

  ngOnInit() {
  }

}
