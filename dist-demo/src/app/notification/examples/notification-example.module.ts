import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsetConfig, TabsModule } from 'ngx-bootstrap/tabs';

import { DemoComponentsModule } from '../../../demo/components/demo-components.module';
import { NotificationModule } from '../notification.module';
import { NotificationService } from '../notification.service';
import { NotificationServiceExampleComponent } from './notification-service-example.component';
import { NotificationServiceBasicExampleComponent } from './notification-service-basic-example.component';
import { NotificationServiceObserverExampleComponent } from './notification-service-observer-example.component';
import { ToastNotificationExampleComponent } from './toast-notification-example.component';
import { ToastNotificationListExampleComponent } from './toast-notification-list-example.component';
import { InlineNotificationExampleComponent } from './inline-notification-example.component';

@NgModule({
  declarations: [
    InlineNotificationExampleComponent,
    NotificationServiceExampleComponent,
    NotificationServiceBasicExampleComponent,
    NotificationServiceObserverExampleComponent,
    ToastNotificationExampleComponent,
    ToastNotificationListExampleComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    DemoComponentsModule,
    FormsModule,
    NotificationModule,
    TabsModule.forRoot()
  ],
  providers: [
    BsDropdownConfig,
    NotificationService,
    TabsetConfig
  ]
})
export class NotificationExampleModule {
  constructor() {}
}
