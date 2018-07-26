import { Message } from './message';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable , Subject } from 'rxjs';
// import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('new-message', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

    // let observable = new Observable(observer => {
    //   this.socket = io(this.url);
    //   this.socket.on('new-message', (data : Message) => {
    //     observer.next(data);    
    //   });
    //   return () => {
    //     this.socket.disconnect();
    //   };  
    // })     
    // return observable;

    // }
}



