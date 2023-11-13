import mongoose from "mongoose";
let { model, Schema } = mongoose;
export let UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      default:
        "https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default model("User", UserSchema);
