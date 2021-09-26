import { Component, Input, OnInit } from '@angular/core';
import conversationsJSON from '../../../assets/conversations.json';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.css']
})
export class MessageBarComponent implements OnInit {
  @Input() selectedConversationId: number = 0;

  public conversations:{
    id: number,
    name: string,
    status: string,
    image: string,
    messages: {sender: string, time: string, message: string}[],
  }[] = conversationsJSON;

  constructor() { }

  ngOnInit(): void { }

  public saveNewMessage(message: string, sender: string) {
    let date = new Date();

    this.conversations.forEach(cv => {
      if(cv.id == this.selectedConversationId) {
        cv.messages.push({
          sender: sender,
          time: `${date.getHours()}:${date.getMinutes()}`,
          message: message
        })
      }
    })
    let input = (document.getElementsByClassName('message-input')[0] as HTMLInputElement)
    input.value = ''
  }

}
