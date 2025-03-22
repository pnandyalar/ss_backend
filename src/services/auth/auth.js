const { SignUps } = require('../../models/auth/sinup')

const signupService = async data => {
  try {
    const { mobileNumber, email } = data

    // Input validation could be added
    if (!mobileNumber || !email) {
      throw new Error('Mobile number and email are required')
    }

    // 🔍 Check if user exists
    const userExist = await SignUps.findOne({
      $or: [{ email: email.toLowerCase() }, { mobileNumber }]
    })

    if (userExist) {
      throw new Error('User already exists with this email or mobile number')
    }

    // ✅ Create new user
    const newUser = await SignUps.create({
      ...data,
      email: email.trim().toLowerCase(),
      mobileNumber: mobileNumber.trim(),
      createdAt: new Date() 
    })

    return {
      success: true,
      data: newUser
    }
  } catch (error) {
    // Consider adding more specific error handling
    throw new Error(error.message || 'Signup failed')
  }
}

module.exports = { signupService }
