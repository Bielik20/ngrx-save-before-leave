import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './../../models/user';

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

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.user && this.userForm && !this.userPending && !this.userDirty && changes.user) {
      this.userForm.patchValue(this.user, { emitEvent: false });
    }
  }
}
