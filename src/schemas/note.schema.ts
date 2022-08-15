import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Note {
 
  @Prop()
  content: string;

  @Prop()
  user: string;

  @Prop()
  createAt: number;

  @Prop()
  toUser: string;

}
export const NoteSchema = SchemaFactory.createForClass(Note);
export type NoteDocument = Note & Document;