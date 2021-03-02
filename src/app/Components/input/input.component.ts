import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  @Input('label')
  inputLabel?: string;

  @Input('type')
  inputType: string = 'text';

  @Input('placeholder')
  inputPlaceholder?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
