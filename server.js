const express = require("express");
//bring the db file by connectDB
const connectDB=require('./config/db')

const app = express();
//connect database 
connectDB();

app.get("/", (req, res) => res.json({ msg: "welcome to contackt kpper API..." }));

//define Routes
app.use("/api/users", require("./routes/users")); 
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT} `));
