import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutSideDirective } from './directives/click-out-side/click-out-side.directive';



@NgModule({
  declarations: [
    ClickOutSideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClickOutSideDirective
  ]
})
export class SharedModule { }
