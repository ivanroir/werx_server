import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    middleName: String,
    lastName: String,
    dateOfBirth: String,
    email: String,
    username: String,
    password: String,
    gender: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    phoneNumber: String,
    countryCode: String,
    joinRealEmail: String,
    licenses: [
      {
        name: String,
        licenseNumber: String,
        issuingAuthority: String,
        expirationDate: Date,
      },
    ],
    website: String,
    sponsorLink: String,
    shareworksId: String,
    department: {
      departmentID: String,
      name: String,
      description: String,
    },
    teams: {
      teamID: String,
      name: String,
      description: String,
    },
    manager: {
      name: String,
      email: String,
      phoneNumber: String,
    },
    specialties: [String],
    position: String,
    socialMediaProfiles: [
      {
        platform: String,
        url: String,
      },
    ],
    languagesSpoken: [String],
    recentSales: [
      {
        propertyType: String,
        salePrice: Number,
        saleDate: Date,
      },
    ],

    transactions: Array,
    image: String,
    hireDate: String,

    emergencyContact: {
      name: String,
      relationship: String,
      phoneNumber: String,
      email: String,
    },
    salary: {
      baseSalary: Number,
      bonuses: [Number],
    },
    benefits: [String],
    notes: String,
    isActive: {
      type: Boolean,
      default: true,
    },
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
