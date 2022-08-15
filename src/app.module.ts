import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { NoteController } from './apis/note/note.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://congpham:123@cluster0.e3gxoqz.mongodb.net/?retryWrites=true&w=majority'), NotesModule],
  controllers: [AppController, NoteController],
  providers: [AppService],
})
export class AppModule {}
