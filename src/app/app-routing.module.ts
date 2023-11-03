import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path:"binding",component:BindingComponent
},
{
  path:"apiCalls",component:ApiCallsComponent
},
{
  path:"componentCommunication",component:ComponentCommunicationComponent
},
{path:"reactiveForm",component:ReactiveFormComponent

},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
