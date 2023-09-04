import User from "../models/User.js";
import CDA from "../models/CDA.js";

// Show list of Users
export default function index(req, res, next) {
  User.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
}

// Show single User
export const showUser = (req, res, next) => {
  let userID = req.body.userID;
  User.findById(userID)
    .then((response) => {
      res.json({});
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
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

  if (req.file) {
    user.image = req.file.path;
  }

  //for array / multiple
  //   if (req.files) {
  //     let path = ''
  //     req.files.forEach(function(files, index, arr) {
  //         path = path + files.path + ','
  //     })
  //     path = path.substring(0, path.lastIndexOf(","))
  //     user.image = path
  //   }

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
export const getCDAList = (req, res, next) => {
  CDA.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

// Display single CDA
export const getCDA = (req, res, next) => {
  let userID = req.body.userID;
  CDA.findById(userID)
    .then((response) => {
      res.json({});
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

// Add CDA
export const storeCDA = (req, res, next) => {
  let cda = new CDA({
    userId: req.body.userID,
  });

  //for array / multiple
  if (req.files) {
    let path = "";
    req.files.forEach(function (files, index, arr) {
      path = path + files.path + ",";
    });
    path = path.substring(0, path.lastIndexOf(","));
    cda.image = path;
  }

  cda
    .save()
    .then((response) => {
      res.json({
        message: "CDA Added Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "CDA not Successfully Added, An error Occured!",
      });
    });
};

// Update a CDA
export const updateCDA = (req, res, next) => {
  let cdaID = req.body.cdaID;

  let updatedData = {
    userId: req.body.userID,
  };

  cda
    .findByIdAndUpdate(cdaID, { $set: updatedData })
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
