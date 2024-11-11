import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your own listings!"));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted!");
  } catch (error) {
    next(error);
  }
};
export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing not found"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can update only your listings"));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log("Hey this is backend call for updatedlisting ", updatedListing);
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, "Listing not found"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};
export const getListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    let transportation = req.query.transportation;

    if (transportation === undefined || transportation === "false") {
      transportation = { $in: [false, true] };
      // Here it means that if transportation is undefined or false then fetch all data in which transportation
      // is false or true;
    }
    let protective_gear = req.query.protective_gear;

    if (protective_gear === undefined || protective_gear === "false") {
      protective_gear = { $in: [false, true] };
    }

    let insurance = req.query.insurance;

    if (insurance === undefined || insurance === "false") {
      insurance = { $in: [false, true] };
    }

    let type = req.query.type;

    if (type === undefined || type === "all") {
      type = { $in: ["sale", "rent"] };
    }

    const searchTerm = req.query.searchTerm || "";

    const sort = req.query.sort || "createdAt";

    const order = req.query.order || "desc";

    const listing = await Listing.find({
      //Here below regex built-in which search for every part of word. and option 'i' means don't
      // care about lower case or upper case.
      name: { $regex: searchTerm, $options: "i" },
      transportation,
      protective_gear,
      insurance,
      type,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};
