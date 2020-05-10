import { NgModule } from '@angular/core';
import { NgprimeComponent } from './ngprime.component';
import { WorkflowsComponent } from './workflows/workflows.component';



@NgModule({
  declarations: [NgprimeComponent, WorkflowsComponent],
  imports: [
  ],
  exports: [NgprimeComponent]
})
export class NgprimeModule { }
