import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.routes.js";
import jobRoute from "./routes/job.routes.js"
import applicationRoute from "./routes/application.routes.js"

dotenv.config({});
const app = express();

/* -------- middleware -------- */
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
  origin: 'http://localhost:5173',  // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true,  // Allow credentials (cookies, authorization headers)
}
app.use(cors(corsOptions));


app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);


const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB();
    console.log(`server listening on http://localhost:${PORT}`);
})