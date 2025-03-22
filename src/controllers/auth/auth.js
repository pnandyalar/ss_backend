const { signupService } = require('../../services/auth/auth')

const signupCtrl = async (req, res) => {
  try {
    const { firstName, lastName, mobileNumber, email, password } = req.body
    const data = {
      firstName,
      lastName,
      mobileNumber,
      email,
      password
    }
    const result = await signupService(data)

    res
      .status(201)
      .json({ message: 'You have signed up successfully', data: result })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = { signupCtrl }
