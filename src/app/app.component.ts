import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlActions } from './+state/counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count$: Observable<number>;

  ngOnInit(): void {
    console.log('first');
  }
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(ControlActions.increment());
  }

  decrement() {
    this.store.dispatch(ControlActions.decrement());
  }

  reset() {
    this.store.dispatch(ControlActions.reset());
  }
}
