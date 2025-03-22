const mongoose = require("mongoose");
const validator = require("validator");

const signupSchema = new mongoose.Schema({
   firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters"],
      maxlength: [50, "First name cannot exceed 50 characters"]
   },
   lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters"],
      maxlength: [50, "Last name cannot exceed 50 characters"]
   },
   mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      validate: {
         validator: function(value) {
            return validator.isMobilePhone(value, "any", { strictMode: false });
         },
         message: "Please enter a valid mobile number"
      }
   },
   email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email address"]
   },
   password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      validate: {
         validator: function(value) {
            return validator.isStrongPassword(value, {
               minLength: 6,
               minLowercase: 1,
               minUppercase: 1,
               minNumbers: 1,
               minSymbols: 1
            });
         },
         message: "Password must be strong (include uppercase, lowercase, number, and symbol)"
      }
   }
}, { timestamps: true });

const SignUps = mongoose.model("SignUps", signupSchema);

module.exports = { SignUps };
