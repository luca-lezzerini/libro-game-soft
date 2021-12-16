import { FuoriDelCastelloComponent } from './fuori-del-castello/fuori-del-castello.component';
import { CavernaComponent } from './caverna/caverna.component';
import { DentroCastelloComponent } from './dentro-castello/dentro-castello.component';
import { BoscoComponent } from './bosco/bosco.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'bosco', component: BoscoComponent },
  { path: 'dentro-castello', component: DentroCastelloComponent },
  { path: 'caverna', component: CavernaComponent },
  { path: '', component: FuoriDelCastelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
