import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {
    path:"", component:BackgroundComponent ,children:[
      {path:""  , component:CarouselComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselRoutingModule { }
