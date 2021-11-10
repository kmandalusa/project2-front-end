import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Rooms } from '../rooms';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms : Rooms [] = [];
 
  constructor(private roomsService : RoomsService) { }
   

  ngOnInit(): void {
    this.getRooms();
  }
  getRooms() :void {
    console.log("Calling getRooms");
    this.roomsService.getRooms()
    .subscribe(rooms => this.rooms = rooms);
   }
}
