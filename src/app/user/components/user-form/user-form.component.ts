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

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Output() update = new EventEmitter<User>();
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      id: 0,
      name: '',
      address: '',
      gender: ''
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.userForm.patchValue(this.user);
  }

  discard() {
    this.userForm.patchValue(this.user);
  }

  submit() {
    this.update.emit(this.userForm.value);
  }
}
