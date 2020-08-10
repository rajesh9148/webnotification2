import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { WebNotificationService } from '../web-notification.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  readonly VAPID_PUBLIC_KEY = "BOsMfqBONyP-d_3M2ZkMNgcYoEtJuifOA2DnLS_MD8EK2ur1-oXYS4i9JfI1CBM_8QJ3y6v4aaLWeeENb9fVHMo";
  ngOnInit(): void {
     this.getNotifcation();
  }

  isEnabled = this.swPush.isEnabled;
  isGranted = Notification.permission === 'granted';
constructor(private swPush: SwPush,
              private webNotificationService: WebNotificationService) {}
submitNotification(): void {
    this.webNotificationService.subscribeToNotification();
  }

  getNotifcation()
  {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
  }).then(sub => {
    console.log('subscription is calling***');
    }).catch(err => {
      console.error("Could not subscribe to notifications", err)
    });
}
  

}
