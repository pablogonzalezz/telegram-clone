import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import conversationsJSON from '../../../assets/conversations.json'

@Component({
  selector: 'app-messages-menu',
  templateUrl: './messages-menu.component.html',
  styleUrls: ['./messages-menu.component.css']
})
export class MessagesMenuComponent implements OnInit {
  @Output() menuButtonClick = new EventEmitter<null>();
  @Output() conversationClick = new EventEmitter<number>();

  public conversations:{
    id: number,
    name: string,
    status: string,
    image: string,
    messages: {sender: string, time: string, message: string}[],
  }[] = conversationsJSON;

  constructor() { }

  ngOnInit(): void { }

  getLatestMessage(conversationId: number) {
    let conversation = this.conversations.find(cv => cv.id == conversationId);
    let latestMessage = conversation?.messages[conversation.messages.length-1];

    return latestMessage?.message;
  }

}
