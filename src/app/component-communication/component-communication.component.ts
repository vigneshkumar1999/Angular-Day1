import { Component, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.css']
})
export class ComponentCommunicationComponent {
  @Output() output=new EventEmitter<string>();

  parentToChild(value:string){
    this.output.emit(value);
    console.log(value)
  }
}
