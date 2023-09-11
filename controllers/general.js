import User from "../models/User.js";
import Properties from "../models/Properties.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Show list of Properties
export const getPropertiesList = async (req, res, next) => {
  try {
    const properties = await Properties.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Show single Properties
export const getProperties = async (req, res) => {
  try {
    const { id } = req.params;
    const properties = await Properties.findById(id);
    res.status(200).json(properties);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Add Properties
export const storeProperties = (req, res, next) => {
  let properties = new Properties({
    userID: req.body.userID,
    mlsNumber: req.body.mlsNumber,
    transactionType: req.body.transactionType,
    propertyType: req.body.propertyType,
    propertyStatus: req.body.propertyStatus,
    street: req.body.street,
    city: req.body.city,
    state: req.body.states,
    postalCode: req.body.postalCode,
    salesPrice: req.body.salesPrice,
    units: req.body.units,
    commission: req.body.commission,
    bonus: req.body.bonus,
    source: req.body.source,
    transactionCoordinatorFee: req.body.transactionCoordinatorFee,
    splitPaid: req.body.splitPaid,
    officeFees: req.body.officeFees,
    agentID: req.body.agentID,
    escrowCompany: req.body.escrowCompany,
    mortgageCompany: req.body.mortgageCompany,
    contractStartDate: req.body.contractStartDate,
    contractExpirationDate: req.body.contractExpirationDate,
    openEscrowDate: req.body.openEscrowDate,
    closingDate: req.body.closingDate,
  });

  //for array / multiple
  if (req.file) {
    properties.image = req.file.path;
  }

  properties
    .save()
    .then((response) => {
      res.json({
        message: "Properties Added Successfully!",
        isSuccess: true,
      });
    })
    .catch((error) => {
      res.json({
        message: "Properties not Successfully Added, An error Occured!",
        isSuccess: false,
      });
    });
};

// Update a Properties
export const updateProperties = (req, res, next) => {
  let propertiesID = req.body.propertiesID;

  let updatedData = {
    mlsNumber: req.body.mlsNumber,
    transactionType: req.body.transactionType,
    propertyType: req.body.propertyType,
    propertyStatus: req.body.propertyStatus,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    postalCode: req.body.postalCode,
    salesPrice: req.body.salesPrice,
    units: req.body.units,
    commission: req.body.commission,
    bonus: req.body.bonus,
    source: req.body.source,
    transactionCoordinatorFee: req.body.transactionCoordinatorFee,
    splitPaid: req.body.splitPaid,
    officeFees: req.body.officeFees,
    agent: req.body.agent,
    escrowCompany: req.body.escrowCompany,
    mortgageCompany: req.body.mortgageCompany,
    contractStartDate: req.body.contractStartDate,
    contractExpirationDate: req.body.contractExpirationDate,
    openEscrowDate: req.body.openEscrowDate,
    closingDate: req.body.closingDate,
  };

  Properties.findByIdAndUpdate(propertiesID, { $set: updatedData })
    .then(() => {
      res.json({
        message: "Properties Updated Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "Properties not Successfully Updated, An error Occured!",
      });
    });
};

// Delete a Properties
export const destroyProperties = (req, res, next) => {
  let propertiesID = req.body.propertiesID;
  Properties.findOneAndRemove(propertiesID)
    .then(() => {
      res.json({
        message: "Properties Removed Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "Properties not Successfully Removed, An error Occured!",
      });
    });
};
