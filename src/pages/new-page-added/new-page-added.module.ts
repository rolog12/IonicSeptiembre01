import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPageAddedPage } from './new-page-added';

@NgModule({
  declarations: [
    NewPageAddedPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPageAddedPage),
  ],
})
export class NewPageAddedPageModule {}
