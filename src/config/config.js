

const env = process.env.NODE_ENV || "development";

const  mongoose  = require('mongoose')
// const cloudinary = require('cloudinary').v2
// const nodemailer = require('nodemailer')

const configPath = {
  PORT: '3000', 
//    RESET_PASSWORD_LINK_TOKEN:'http://localhost:3001/confirm-password?token='|| 'http://localhost:8081/confirm-password?token=' ,
//   MAPPLS_API_KEY:'c4124f538a49e785fbd5fcb7dd1df84a',
  // JWT KEYS
  JWT_SECRET: 'kats',
//   // cloudinary details
//   CLOUDINARY_CLOUD_NAME: 'dkxf4imba',
//   CLOUDINARY_API_KEY: '272634625548731',
//   CLOUDINARY_API_SECRET: 'XajBWkaWOGABKxi1EouQMGv7Nlc',
}

const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://choudharysanjivkumar5:0zY53CT5Hz1jfsNY@cluster0.jbqu5.mongodb.net/silver-scessior'
  )
}

const EMAIL_USER = 'sanjivchoudhary04@gmail.com'
const EMAIL_PASS = 'xarfycrgtjazhzad'

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS
//   }
// })

// cloudinary.config({
//   cloud_name: configPath.CLOUDINARY_CLOUD_NAME,
//   api_key: configPath.CLOUDINARY_API_KEY,
//   api_secret: configPath.CLOUDINARY_API_SECRET
// })


module.exports = { connectDB}
