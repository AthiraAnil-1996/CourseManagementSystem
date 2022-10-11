const mongoose = require("mongoose")
const DB = "mongodb://localhost:27017/Course"
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database Connection Successful")
   }).catch((err) => {
    console.log(err)
   })

const schema = mongoose.Schema

const studentSchema = new schema({
 email: String,
 password: String,
 pin: Number,
 name: String,
 email: String,
 phone: String,
 course:String,
 batch: String,
 image: String,
 startDate: String,
 endDate: String,
 status:String,
 Date:String,

}, {
 versionKey: false
})

const professorSchema = new schema({
 name:String,
 email: String,
 phone:String,
 password: String,
 course:String,
 joiningDate:String,
 designation:String,
 pin: Number,
}, {
 versionKey: false
})


const courseSchema = new schema({
 course:Array,
 batch:Array
})

const NotificationSchema = new schema({
    message: {
        text: { type: String, required: true },
      },
      users: Array,
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      time:{
        type:Date,
        required:true
      }
})


const studentData = new mongoose.model('students', studentSchema)
const professorData = new mongoose.model('moderators', professorSchema)
const courseData = new mongoose.model('courses',courseSchema)
const messageData = new mongoose.model('messages',NotificationSchema)

module.exports = { studentData, professorData, courseData, messageData }