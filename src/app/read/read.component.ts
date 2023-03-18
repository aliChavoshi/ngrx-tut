import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { ITutorial } from '../models/tutorial';
import * as TutorialAction from './../actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  tutorials$: Observable<ITutorial[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.tutorials$ = this.store.select('tutorial');
  }
  delTutorial(id) {
    this.store.dispatch(new TutorialAction.RemoveTutorial(id));
  }
}
