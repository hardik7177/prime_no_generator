import mongoose from "mongoose";

const prime_no_schema = new mongoose.Schema(
  {
    email: {type: String},
    
    // Creating "log" which is an array of objects so that all the history of particular user can be stored in one document only.
    log: [
      {
        start: { type: String, required: true },
        end: { type: String, required: true },
        aproach: { type: String, required: true },
        prime_no: { type: Array },
        total_primes: { type: Number },
        time_Elapsed: { type: String },
      },
    ],
  },

  { timestamps: true }
);

const Record = mongoose.model("Record", prime_no_schema);

export default Record;
