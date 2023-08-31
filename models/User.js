import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    middleName: {
      type: String,
      min: 1,
      max: 100,
    },
    lastName: {
      type: String,
      min: 2,
      max: 100,
    },
    joinRealEmail: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    licenseNumber: {
      type: String,
      required: true,
      unique: true,
    },
    licenseExpirationDate: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    sponsorLink: {
      type: String,
      required: true,
    },
    shareworksId: {
      type: String,
      required: true,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    position: String,
    countryCode: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
