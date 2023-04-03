import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { AddTutorial } from './../actions/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
  addTutorial(name: string, url: string) {
    this.store.dispatch(new AddTutorial({ name, url }));
  }
}
