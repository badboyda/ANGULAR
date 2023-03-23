import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  myDestroy: Subscription=Subscription.EMPTY;
  constructor() { }

  ngOnInit(): void {
    const myObs$ = new Observable(obs => {
      console.log("START OBSERVABLE");
      obs.next('100');
      obs.next('200');
      // obs.error('not working');
      obs.next('300');
      // obs.complete();

      //asyn work below.it work one second take a time.next statement print,finally print asy(time based)
      setTimeout(() => {
        obs.next('400');
      }, 1000);

      console.log("END OBSERVABLE");
    });

    this.myDestroy=myObs$.subscribe(sub => {
      console.log('FIRST' + sub);

    },
      error => {
        console.log("Error " + error);
      },

      () => {
        console.log("completed")
      }

    );
    this.myDestroy.unsubscribe();

    // myObs$.subscribe(sub => {
    // console.log('SECOND'+sub);

    // });
  }

}
