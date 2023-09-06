import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    mlsNumber: {
      type: String,
      min: 2,
      max: 100,
    },
    transactionType : {
      type: String,
      enum: ["Listing", "Purchase", "Lease"],
      min: 1,
      max: 100,
    },
    propertyType: {
      type: String,
      enum: ["Residential", "Residential Income", "Land", "Commercial", "Industrial", "Other"],
      min: 2,
      max: 100,
    },
    propertyStatus : {
      type: String,
      enum: ["None", "Active", "Closed", "Pending", "Active Contingent"],
      max: 50,
      unique: true,
    },
    street: String,
    city: String,
    state: String,
    postalCode: String,
    salesPrice: String,
    units: String,
    commission: String,
    bonus: String,
    source: String,
    transactionCoordinatorFee: String,
    splitPaid: String,
    officeFees: String,
    agent: String,
    escrowCompany : String,
    mortgageCompany: String,
    contractStartDate: String,
    contractExpirationDate: String,
    openEscrowDate: String,
    closingDate: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
