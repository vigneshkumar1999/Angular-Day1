import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class ApiCallsComponent {
    constructor(private userService:ServiceService){}
    apiData!:object;
    getData(){
      this.userService.getApiData().subscribe(data=>{
        this.apiData=data
      });
    }
}
