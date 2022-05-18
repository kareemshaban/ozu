import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoreLoginEulPage } from './eul';

@NgModule({
  declarations: [
    CoreLoginEulPage,
  ],
  imports: [
    IonicPageModule.forChild(CoreLoginEulPage),
  ],
})
export class EulPageModule {}
