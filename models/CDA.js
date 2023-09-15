import mongoose from "mongoose";

const CDASchema = new mongoose.Schema(
  {
    adminID: String,
    agentID: String,
    name: String,
    document: {
      fileURL: {
        type: String,
      },
      uploadDate: {
        type: Date,
        default: Date.now,
      },
    },
  
  },
  {
    timestamps: true,
  }
);

const CDA = mongoose.model("CDA", CDASchema);
export default CDA;

//Commission Disbursement Authorization
