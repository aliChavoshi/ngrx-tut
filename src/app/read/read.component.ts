import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { ITutorial } from '../models/tutorial';
import { EditTutorial, RemoveTutorial } from './../actions/tutorial.action';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  public index = undefined;
  tutorials$: Observable<ITutorial[]>;
  public isEdit = false;
  constructor(private store: Store<AppState>) {}

  form = new FormGroup({
    name: new FormControl(''),
    url: new FormControl(''),
  });

  ngOnInit(): void {
    this.tutorials$ = this.store.select('tutorial');
  }
  delTutorial(index: number) {
    this.store.dispatch(new RemoveTutorial(index));
  }

  addToEdit(item: ITutorial, index: number) {
    this.index = index;
    this.isEdit = true;
    this.form.patchValue(item);
  }
  editTutorial() {
    this.store.dispatch(new EditTutorial(this.form.value as ITutorial, this.index));
    this.isEdit = false;
    this.form.reset();
  }
}
