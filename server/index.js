import express from 'express';
import upcRouter from "./routes/upcRouter.js";
const PORT = process.env.PORT || 3001;

const app = express();

app.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
next();
});

app.get("/test", (req, res) => {
res.json({ message: "Hello from server!" });
});

app.use("/upc", upcRouter)
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

