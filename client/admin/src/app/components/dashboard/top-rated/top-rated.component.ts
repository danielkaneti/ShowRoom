import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Products } from '../../../models/products';
import { ChatService} from '../../../services/chat.service';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { LoginService } from 'src/app/services/login.service';
import { addUser } from 'src/app/models/addUser';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
  providers:[ChatService]
})


export class TopRatedComponent implements OnInit {

  products: Products[] = [];

  room='lobby';
  user='Admin';
  messageText:string;
  messageArray:Array<{user:addUser,message:String}>=[];

  constructor(private productsService: ProductsService,
              private chatservise:ChatService,
              private loginService: LoginService)
               {
                // this.chatservise.newUserJoin().subscribe(data=>this.messageArray.push(data));
                // this.chatservise.userLeftRoom().subscribe(data=> this.messageArray.push(data));
                this.chatservise.newMessageRecived().subscribe(data=> this.messageArray.push(data));
               }

  ngOnInit(): void {
    this.join();   
  }
  
 
  join(){
    this.chatservise.joinRoom(this.loginService.activeUser);
  }
  leave(){
    // this.chatservise.leaveRoom({user:this.user, room:this.room});
  }
  sendMessage(){
    this.chatservise.sendMessage({user:this.loginService.activeUser, message:this.messageText});
    
  }
}
