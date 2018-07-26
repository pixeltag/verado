import { ChatService } from './../chat.service';
import { Message } from './../message';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  title = 'app';
  newMessage : Message;
  author : string;
  openChatWindow : boolean = true;
  authorIs : boolean;
  messages= [];
  connection;


  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    });
    this.newMessage = new Message();
  }


  closeChat() {
    this.openChatWindow = true;
  }

  openChat() {
    if(this.openChatWindow == false) {
      this.openChatWindow = true;
    } else {
      this.openChatWindow = false;
    }
  }


  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage.message = "";
console.log(this.messages)

  }


  enterChat() {
    if(this.author !== "") {
      this.authorIs = false;
      console.log(this.authorIs)
    } else {
      this.authorIs = true;
      console.log(this.authorIs)
    }

  }
}
