import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [
    SideBarComponent,
         SearchBoxComponent
  ],
  imports: [
    RouterModule
    
  ],
  exports:[
    SideBarComponent,
         SearchBoxComponent
  ]
})
export class SharedModule { }
