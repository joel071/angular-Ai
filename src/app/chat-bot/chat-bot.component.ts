import { Component, OnInit } from '@angular/core';
import { ChatbotService, Message } from '../chatbot.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent implements OnInit{

  messages: Message[] = [];
  
  value: any;
  
  constructor( public chatService: ChatbotService) {}


  ngOnInit() {
    this.chatService.conversation.subscribe((val) => {
    this.messages = this.messages.concat(val);
  });
  }

  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }
}
