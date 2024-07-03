// const express = require ("express");
// const app = express();
// // const profileRouter = require('./routes/Profile'); // Assuming Profile.js is in the 'routes' folder
// const router = express.Router();
// // Correct usage of .get() with a callback function
// router.get('/profile', function(req, res) {
//   res.send('Profile Page');
// });

// module.exports = router;

// const userRoutes = require ("./routes/User");
// const profileRoutes = require ("./routes/Profile");
// const paymentRoutes = require ("./routes/Payment");
// const courseRoutes =  require ("./routes/Course");
// const contactUsRoutes = require ("./routes/ContactUs");

// const database = require("./config/database");
// const cookieParser = require ("cookie-parser");


// const cors = require("cors");
// const {cloudinaryConnect} = require("./config/cloudinary")

// const fileUpload = require("express-fileupload")
// const dotenv = require ("dotenv");


// dotenv.config();
// const PORT = process.env.PORT || 4000;

// //database connect
// database.connect();

// //middlewares
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         credentials:true,
//     })
// )
// app.use(
//     fileUpload({
//         useTempFiles:true,
//         tempFileDir:"/tmp",
//     })
// )

// // cloudinary connection 
// cloudinaryConnect();

// //routes mounts
// app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/contactUs", contactUsRoutes);

// //default route
// app.get("/", (req,res)=> {
//     return res.json({
//         success:true,
//         message:"Your server is up and running... "
//     })
// })

// //starting of server 
// app.listen(PORT,() => {
//     console.log(`App is running at ${PORT}`)
// })







const express = require("express");

const app = express();

const userRoutes = require("./routes/User");
const paymentRoutes = require("./routes/Payments");
const profileRoutes = require("./routes/Profile");
const courseRoutes = require("./routes/Course");

const database = require("./config/database");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const fileUpload = require("express-fileupload");
const { cloudinaryConnect } = require("./config/cloudinary");

const dotenv = require("dotenv");
dotenv.config();

// const PORT = process.env.PORT || 5000;
// database.connect();

// app.use(express.json());
// app.use(cookieParser());

// app.use(
//   cors({
//     origin: JSON.parse(process.env.CORS_ORIGIN),
//     credentials: true,
//     maxAge: 14400,
//   })
// );

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp",
//   })
// );

// cloudnairyconnect();

// app.use("/api/v1/auth", userRoutes);

// app.use("/api/v1/payment", paymentRoutes);

// app.use("/api/v1/profile", profileRoutes);

// app.use("/api/v1/course", CourseRoutes);

// app.use("/api/v1/contact", require("./routes/ContactUs"));

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Welcome to the API",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });






// const express = require ("express");
// const app = express();
// const profileRouter = require('./routes/Profile'); // Assuming Profile.js is in the 'routes' folder
const router = express.Router();
// Correct usage of .get() with a callback function
router.get('/profile', function(req, res) {
  res.send('Profile Page');
});

module.exports = router;

// const userRoutes = require ("./routes/User");
// const profileRoutes = require ("./routes/Profile");
// const paymentRoutes = require ("./routes/Payment");
// const courseRoutes =  require ("./routes/Course");
// const contactUsRoutes = require ("./routes/ContactUs");

// const database = require("./config/database");
// const cookieParser = require ("cookie-parser");


// const cors = require("cors");
// const {cloudinaryConnect} = require("./config/cloudinary")

// const fileUpload = require("express-fileupload")
// const dotenv = require ("dotenv");


dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
)

// cloudinary connection 
cloudinaryConnect();
// Cloudinairyconnect()

//routes mounts
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/contactUs", contactUsRoutes);

//default route
app.get("/", (req,res)=> {
    return res.json({
        success:true,
        message:"Your server is up and running... "
    })
})

//starting of server 
app.listen(PORT,() => {
    console.log(`App is running at ${PORT}`)
})
