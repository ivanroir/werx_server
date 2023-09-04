import mongoose from "mongoose";

const CDASchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      // required: true,
      min: 2,
      max: 100,
    },
    file: String
  },
  {
    timestamps: true,
  }
);

const CDA = mongoose.model("CDA", CDASchema);
export default CDA;

//Commission Disbursement Authorization