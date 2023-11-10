import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeyboardComponent } from './products/keyboard/keyboard.component';
import { KeyboardService } from './products/keyboard.service';
import {MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { KeyboardDetailComponent } from './products/keyboard-detail/keyboard-detail.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './login/jwt.interceptor';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './login/auth.guard';
import { HomeComponent } from './home/home.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SingupComponent } from './singup/singup.component';
import { LoginGuard } from './login/login.guard';
import { AccountsettingsComponen } from './accountsettings/accountsettings.component';
import { MyreviewsComponent } from './myreviews/myreviews.component';
import { DatePipe } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import { MyaddressesComponent } from './myaddresses/myaddresses.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MytransactionsComponent } from './mytransactions/mytransactions.component';
import { AuthAdminGuard } from './login/authadmin.guard';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MouseComponent } from './products/mouse/mouse.component';
import { MouseService } from './products/mouse.service';
import { MouseDetailComponent } from './products/mouse-detail/mouse-detail.component';
import { HeadsetComponent } from './products/headset/headset.component';
import { HeadsetDetailComponent } from './products/headset-detail/headset-detail.component';
import { HeadsetService } from './products/headset.service';
import { MonitorDetailComponent } from './products/monitor-detail/monitor-detail.component';
import { MonitorComponent } from './products/monitor/monitor.component';
import { MonitorService } from './products/monitor.service';
import { ProcessorComponent } from './products/processor/processor.component';
import { ProcessorDetailComponent } from './products/processor-detail/processor-detail.component';
import { VideocardComponent } from './products/videocard/videocard.component';
import { VideocardDetailComponent } from './products/videocard-detail/videocard-detail.component';
import { VideocardService } from './products/videocard.service';
import { ProcessorService } from './products/processor.service';
import { MotherboardComponent } from './products/motherboard/motherboard.component';
import { MotherboardDetailComponent } from './products/motherboard-detail/motherboard-detail.component';
import { MotherboardService } from './products/motherboard.service';
import { RammemoryComponent } from './products/rammemory/rammemory.component';
import { RammemoryDetailComponent } from './products/rammemory-detail/rammemory-detail.component';
import { RammemoryService } from './products/rammemory.service';
import { SsdComponent } from './products/ssd/ssd.component';
import { SsdDetailComponent } from './products/ssd-detail/ssd-detail.component';
import { HarddiskComponent } from './products/harddisk/harddisk.component';
import { HarddiskDetailComponent } from './products/harddisk-detail/harddisk-detail.component';
import { SsdService } from './products/ssd.service';
import { HarddiskService } from './products/harddisk.service';
import { KeyboardTableComponent } from './admin/keyboard-table/keyboard-table.component';
import { MouseTableComponent } from './admin/mouse-table/mouse-table.component';
import { HeadsetTableComponent } from './admin/headset-table/headset-table.component';
import { MonitorTableComponent } from './admin/monitor-table/monitor-table.component';
import { ProcessorTableComponent } from './admin/processor-table/processor-table.component';
import { VideocardTableComponent } from './admin/videocard-table/videocard-table.component';
import { SsdTableComponent } from './admin/ssd-table/ssd-table.component';
import { HarddiskTableComponent } from './admin/harddisk-table/harddisk-table.component';
import { MotherboardTableComponent } from './admin/motherboard-table/motherboard-table.component';
import { RammemoryTableComponent } from './admin/rammemory-table/rammemory-table.component';
import { AccountTableComponent } from './admin/account-table/account-table.component';
import { ReviewTableComponent } from './admin/review-table/review-table.component';
import { CommentTableComponent } from './admin/comment-table/comment-table.component';
import { ReviewTableAllComponent } from './admin/review-table/review-table-all/review-table-all.component';
import { CommentTableAllComponent } from './admin/comment-table/comment-table-all/comment-table-all.component';
import { TransactionTableComponent } from './admin/transaction-table/transaction-table.component';
import { ManagerComponent } from './manager/manager.component';
import { AuthManagerGuard } from './login/authmanager.guard';
import { TransactionChartComponent } from './manager/transaction-chart/transaction-chart.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { TransactionChartTimeComponent } from './manager/transaction-chart-time/transaction-chart-time.component';
import { PcSystemComponent } from './products/pc-system/pc-system.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    NavbarComponent,
    KeyboardDetailComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    SingupComponent,
    AccountsettingsComponen,
    MyreviewsComponent,
    MyaddressesComponent,
    FooterComponent,
    CartComponent,
    MytransactionsComponent,
    MouseComponent,
    MouseDetailComponent,
    HeadsetComponent,
    HeadsetDetailComponent,
    MonitorDetailComponent,
    MonitorComponent,
    ProcessorComponent,
    ProcessorDetailComponent,
    VideocardComponent,
    VideocardDetailComponent,
    MotherboardComponent,
    MotherboardDetailComponent,
    RammemoryComponent,
    RammemoryDetailComponent,
    SsdComponent,
    SsdDetailComponent,
    HarddiskComponent,
    HarddiskDetailComponent,
    KeyboardTableComponent,
    MouseTableComponent,
    HeadsetTableComponent,
    MonitorTableComponent,
    ProcessorTableComponent,
    VideocardTableComponent,
    SsdTableComponent,
    HarddiskTableComponent,
    MotherboardTableComponent,
    RammemoryTableComponent,
    AccountTableComponent,
    ReviewTableComponent,
    CommentTableComponent,
    ReviewTableAllComponent,
    CommentTableAllComponent,
    TransactionTableComponent,
    ManagerComponent,
    TransactionChartComponent,
    TransactionChartTimeComponent,
    PcSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    CanvasJSAngularChartsModule,
    MatSnackBarModule
  ],
  providers: [
    KeyboardService ,
    MouseService,
    HeadsetService,
    MonitorService,
    VideocardService,
    ProcessorService,
    MotherboardService,
    RammemoryService,
    SsdService,
    HarddiskService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthGuard,
    AuthAdminGuard,
    LoginGuard,
    AuthManagerGuard,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

