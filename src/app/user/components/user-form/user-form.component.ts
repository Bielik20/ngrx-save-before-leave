import { User } from './../../models/user';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Input() userPending: boolean;
  @Input() userDirty: boolean;
  @Input() userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userForm && !this.userPending && !this.userDirty && changes.user) {
      this.userForm.patchValue(this.user, { emitEvent: false });
    }
  }
}
