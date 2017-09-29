import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { BookingPage } from '../pages/booking/booking';
import { BusMapPage } from '../pages/map/map';
import { UserViewPage } from '../pages/view/view';
import { UserPrintPage } from '../pages/print/print';
import { BusPage } from '../pages/bus/bus';
import { ConfirmPage } from '../pages/confirm/confirm';
import { DeletePage } from '../pages/delete/delete';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BusProvider } from '../providers/bus/bus';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    BookingPage,
    BusMapPage,
    UserViewPage,
    UserPrintPage,
    ConfirmPage,
    BusPage,
    DeletePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    BookingPage,
    BusMapPage,
    UserViewPage,
    UserPrintPage,
    ConfirmPage,
    BusPage,
    DeletePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BusProvider
  ]
})
export class AppModule {}
