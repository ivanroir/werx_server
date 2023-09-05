import mongoose from "mongoose";

const CDASchema = new mongoose.Schema(
  {
    userID: String,
    file: String,
  },
  {
    timestamps: true,
  }
);

const CDA = mongoose.model("CDA", CDASchema);
export default CDA;

//Commission Disbursement Authorization
