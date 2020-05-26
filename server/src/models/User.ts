import mongoose, { Schema, Document } from "mongoose";
import isMobilePhone from "validator/lib/isMobilePhone";
import matches from "validator/lib/matches";

export interface IUser extends Document {
  phone: string;
  nickname: string;
  birthday: Date;
  password: string;
}

const UserSchema: Schema = new Schema({
  nickname: {
    type: String,
    required: true,
    validate: [(v: string) => matches(v, /[a-z0-9\-_]+/i), ""],
  },
  birthday: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
    validate: [isMobilePhone, "No valid phone number provided."],
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 64,
  },
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
