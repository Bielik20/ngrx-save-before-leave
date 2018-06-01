import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input() users: User[];
  @Output() chosenId = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  chosen(id: number) {
    this.chosenId.emit(id);
  }

}
