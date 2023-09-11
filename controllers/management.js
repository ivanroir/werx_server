import User from "../models/User.js";
import CDA from "../models/CDA.js";

// Show list of Users
export default async function index(req, res, next) {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// Show single User
export const showUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Add user
export const storeUser = (req, res, next) => {
  let user = new User({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    joinRealEmail: req.body.joinRealEmail,
    licenseNumber: req.body.licenseNumber,
    licenseExpirationDate: req.body.licenseExpirationDate,
    website: req.body.website,
    sponsorLink: req.body.sponsorLink,
    shareworksId: req.body.shareworksId,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country,
    position: req.body.country,
    countryCode: req.body.countryCode,
    phoneNumber: req.body.phoneNumber,
    transactions: req.body.transactions,
  });

  // console.log("🚀 ~ file: management.js:59 ~ storeUser ~ req:", req.files)
  if (req.file) {
    user.image = req.file.path;
  }

  user
    .save()
    .then((response) => {
      res.json({
        message: "User Added Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "User not Successfully Added, An error Occured!",
      });
    });
};

// Update a user
export const updateUser = (req, res, next) => {
  let userID = req.body.userID;

  let updatedData = {
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    joinRealEmail: req.body.joinRealEmail,
    licenseNumber: req.body.licenseNumber,
    licenseExpirationDate: req.body.licenseExpirationDate,
    website: req.body.website,
    sponsorLink: req.body.sponsorLink,
    shareworksId: req.body.shareworksId,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country,
    position: req.body.country,
    countryCode: req.body.countryCode,
    phoneNumber: req.body.phoneNumber,
    transactions: req.body.transactions,
  };

  User.findByIdAndUpdate(userID, { $set: updatedData })
    .then(() => {
      res.json({
        message: "User Updated Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "User not Successfully Updated, An error Occured!",
      });
    });
};

// Delete a user
export const destroyUser = (req, res, next) => {
  let userID = req.body.userID;
  User.findOneAndRemove(userID)
    .then(() => {
      res.json({
        message: "User Removed Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "User not Successfully Removed, An error Occured!",
      });
    });
};

// Display all list CDA
export async function getCDAList(req, res, next) {
  try {
    const cda = await CDA.find();
    res.status(200).json(cda);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// Display single CDA
export const getCDA = async (req, res) => {
  try {
    const { id } = req.params;
    const cda = await CDA.findById(id);
    res.status(200).json(cda);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Add CDA
export const storeCDA = (req, res, next) => {
  let cda = new CDA({
    userID: req.body.userID,
    agentID: req.body.agentID,
    name: req.body.name
  });

  //for array / multiple
  if (req.files) {
    let path = "";
    req.files.forEach(function (files, index, arr) {
      path = path + files.path + ",";
    });3143
    path = path.substring(0, path.lastIndexOf(","));
    cda.file = path;
  }

  cda
    .save()
    .then((response) => {
      res.json({
        message: "CDA Added Successfully!",
        isSuccess: true,
      });
    })
    .catch((error) => {
      res.json({
        message: "CDA not Successfully Added, An error Occured!",
        isSuccess: false,
      });
    });
};

// Update a CDA
export const updateCDA = (req, res, next) => {
  let cdaID = req.body.cdaID;

  let updatedData = {
    userID: req.body.userID,
  };

  CDA.findByIdAndUpdate(cdaID, { $set: updatedData })
    .then(() => {
      res.json({
        message: "User Updated Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "User not Successfully Updated, An error Occured!",
      });
    });
};

// Delete a CDA
export const destroyCDA = (req, res, next) => {
  let cdaID = req.body.cdaID;
  CDA.findOneAndRemove(cdaID)
    .then(() => {
      res.json({
        message: "User Removed Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "User not Successfully Removed, An error Occured!",
      });
    });
};
