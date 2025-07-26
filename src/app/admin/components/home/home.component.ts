import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() title: string = '';
  @Output() dataFromChild = new EventEmitter<string>;

  ngOnInit() {
    console.log("input from parent: ",this.title);
    this.dataFromChild.emit('data from Child')
  }
}


