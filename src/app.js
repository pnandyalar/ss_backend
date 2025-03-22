const express =require('express');
const {connectDB} =require('./config/config')
const app = express();
const authRoutes= require('./routes/auth');

app.use(express.json()); 
app.use('/',authRoutes)


connectDB()
  .then(() => {
    console.log('Database connection is established')
    app.listen(5000, () => {
      console.log('Backend server is listening on port 5000')
    })
  })
  .catch(err => {
    console.error('Database connection failed:', err.message)
  })
