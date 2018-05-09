import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  coder;
  cret;
  noob;
  caleb;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getFreeCodeCamp()
      .subscribe(coder => this.coder = coder);
    this.usersService.getCretetion()
      .subscribe(cret => this.cret = cret);
    this.usersService.getNoobs()
      .subscribe(noob => this.noob = noob);
    this.usersService.getCaleb()
      .subscribe(caleb => this.caleb = caleb);
  }
}
