import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Note } from 'src/models/note.model';
import { NoteService } from 'src/services/note/note.service';

@Controller('note')
export class NoteController {
    constructor(private noteServices: NoteService) {}

    @Post('/send')
    public async sendNote(@Body() note:Note){
      return await this.noteServices.create(note);
    }
    @Get('/')
    public async getNote(@Query('from')fromId:string,@Query('to')toId:string){
      return await this.noteServices.findByUserId(fromId,toId);
    }

    

  
}
