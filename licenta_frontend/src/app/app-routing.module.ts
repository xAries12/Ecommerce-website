import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyboardComponent } from './products/keyboard/keyboard.component';
import {KeyboardDetailComponent} from './products/keyboard-detail/keyboard-detail.component'
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './login/auth.guard';
import { SingupComponent } from './singup/singup.component';
import { LoginGuard } from './login/login.guard';
import { AccountsettingsComponen } from './accountsettings/accountsettings.component';
import { MyreviewsComponent } from './myreviews/myreviews.component';
import { MyaddressesComponent } from './myaddresses/myaddresses.component';
import { CartComponent } from './cart/cart.component';
import { MytransactionsComponent } from './mytransactions/mytransactions.component';
import { AuthAdminGuard } from './login/authadmin.guard';
import { MouseComponent } from './products/mouse/mouse.component';
import { MouseDetailComponent } from './products/mouse-detail/mouse-detail.component';
import { HeadsetComponent } from './products/headset/headset.component';
import { HeadsetDetailComponent } from './products/headset-detail/headset-detail.component';
import { MonitorComponent } from './products/monitor/monitor.component';
import { MonitorDetailComponent } from './products/monitor-detail/monitor-detail.component';
import { ProcessorComponent } from './products/processor/processor.component';
import { ProcessorDetailComponent } from './products/processor-detail/processor-detail.component';
import { VideocardComponent } from './products/videocard/videocard.component';
import { VideocardDetailComponent } from './products/videocard-detail/videocard-detail.component';
import { MotherboardComponent } from './products/motherboard/motherboard.component';
import { MotherboardDetailComponent } from './products/motherboard-detail/motherboard-detail.component';
import { RammemoryComponent } from './products/rammemory/rammemory.component';
import { RammemoryDetailComponent } from './products/rammemory-detail/rammemory-detail.component';
import { SsdComponent } from './products/ssd/ssd.component';
import { SsdDetailComponent } from './products/ssd-detail/ssd-detail.component';
import { HarddiskDetailComponent } from './products/harddisk-detail/harddisk-detail.component';
import { HarddiskComponent } from './products/harddisk/harddisk.component';
import { ManagerComponent } from './manager/manager.component';
import { AuthManagerGuard } from './login/authmanager.guard';
import { PcSystemComponent } from './products/pc-system/pc-system.component';



const routes: Routes = [
{ path: 'store/keyboards',
   component: KeyboardComponent
 },{
  path: 'keyboard/:id',
  component: KeyboardDetailComponent
},
{ path: 'store/mouses',
   component: MouseComponent
 },
 {
  path: 'store/pc-system',
  component: PcSystemComponent
},
 {
  path: 'mouse/:id',
  component: MouseDetailComponent
},
{ path: 'store/headsets',
   component: HeadsetComponent
 },
 {
  path: 'headset/:id',
  component: HeadsetDetailComponent
},
{ path: 'store/monitors',
   component: MonitorComponent
 },
 {
  path: 'monitor/:id',
  component: MonitorDetailComponent
},
{ path: 'store/processors',
   component: ProcessorComponent
 },
 {
  path: 'processor/:id',
  component: ProcessorDetailComponent
},
{ path: 'store/videocards',
   component: VideocardComponent
 },
 {
  path: 'videocard/:id',
  component: VideocardDetailComponent
},
{ path: 'store/motherboards',
   component: MotherboardComponent
 },
 {
  path: 'motherboard/:id',
  component: MotherboardDetailComponent
},
{ path: 'store/ram-memories',
   component: RammemoryComponent
 },
 {
  path: 'ram-memory/:id',
  component: RammemoryDetailComponent
},
{ path: 'store/ssd',
   component: SsdComponent
 },
 {
  path: 'ssd/:id',
  component: SsdDetailComponent
},
{ path: 'store/hard-disk',
   component: HarddiskComponent
 },
 {
  path: 'hard-disk/:id',
  component: HarddiskDetailComponent
},
 {
  path: 'login',
  component: LoginComponent,
  canActivate: [LoginGuard]
},
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthAdminGuard]
},
{
  path: 'manager',
  component: ManagerComponent,
  canActivate: [AuthManagerGuard]
},
{
  path: 'home',
  component: HomeComponent,
},
{
  path: 'register',
  component: SingupComponent,
  canActivate: [LoginGuard]
},
{
  path: 'accountsettings/:email',
  component: AccountsettingsComponen,
  canActivate: [AuthGuard]
},
{
  path: 'myreviews/:email',
  component: MyreviewsComponent,
  canActivate: [AuthGuard]
},
{
  path: 'myaddresses/:email',
  component: MyaddressesComponent,
  canActivate: [AuthGuard]
},
{
  path: 'cart',
  component: CartComponent,
},
{
  path: 'mytransactions/:email',
  component: MytransactionsComponent,
  canActivate: [AuthGuard]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
