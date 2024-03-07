const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, required: [true, "Email is required."], unique: true, 
    lowercase: true, trim: true },
    password: { type: String, required: [true, "Password is required."] },
    name: { type: String, required: false},
    country: { type: String, required: false },
    city: { type: String, required: false },
  }
  /*{
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }*/
);

const User = model("User", userSchema);

module.exports = User;
