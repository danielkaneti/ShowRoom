import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Socket} from 'ngx-socket-io';
import { isObject } from 'rxjs/internal/util/isObject';
import * as io from 'ngx-socket-io';
import { Users } from '../models/users';
import { addUser } from '../models/addUser';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket:Socket) { }

  joinRoom(data: addUser){
    this.socket.emit('joined_chat', {user: data});
  }


  sendMessage(data: {user: addUser, message: string}){
    this.socket.emit('message_sent', data);
  }
  newMessageRecived(){
    let obs= new Observable<{user:addUser, message:String}>(ob=>{
      this.socket.on('message_received',(data)=> {
        ob.next(data);
      });
      return ()=>{this.socket.disconnect();}
    });
    return obs;
  }
}
