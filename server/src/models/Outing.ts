import mongoose, { Schema, Document } from 'mongoose';

import User, { IUser } from './User';

export interface IOuting extends Document {
  type: string,
  date: Date,
  minGuests: number,
  maxGuests?: number
  author: IUser
}

const OutingSchema: Schema = new Schema({
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  minGuests: {
    type: Number,
    required: true,
  },
  maxGuests: {
    type: Number,
    required: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

const Outing = mongoose.model<IOuting>('Outing', OutingSchema);

export default Outing;