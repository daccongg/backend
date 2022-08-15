import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Note, NoteDocument } from 'src/schemas/note.schema';

import {Note as NoteModel} from 'src/models/note.model'

@Injectable()
export class NoteService {
    constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>){}

   async create(note: NoteModel){
        note.createAt = Date.now();
        let createdNote = new this.noteModel(note);
        await createdNote.save();
    }

    async findAll(){
        return await this.noteModel.find().exec();

    }
    async findByUserId(fromUserId: string,toUserId: string){
        return await this.noteModel.find({$or:[{user: fromUserId,toUser: toUserId},{user: toUserId,toUser: fromUserId}]}).exec();
    }



    
}
