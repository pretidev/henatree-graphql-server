import mongoose, { Schema, Document } from 'mongoose';
import isEmail from "validator/lib/isEmail";
import matches from "validator/lib/matches";

export interface IUser extends Document {
  email: string;
  nickname: string;
  birthday: Date;
}

const UserSchema: Schema = new Schema({
  nickname: {
    type: String,
    required: true,
    validate: [(v: string) => matches(v, /[a-z0-9\-_]+/i), ""]
  },
  birthday: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [isEmail, 'No valid email address provided.'],
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 42,
  },
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;