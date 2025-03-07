import mongoose from "mongoose";

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const FormData =
  mongoose.models.FormData || mongoose.model("FormData", formDataSchema);

export default FormData;