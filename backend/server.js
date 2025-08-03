import express from "express";
import publicRoutes from "./routes/public.js";
import privateRoutes from "./routes/private.js";
import auth from "./middlewares/auth.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", publicRoutes);
app.use("/", auth, privateRoutes);

// motcha
// 2veUcB3hMHxCus3f
// mongodb+srv://motcha:2veUcB3hMHxCus3f@users.hu8mps7.mongodb.net/?retryWrites=true&w=majority&appName=Users

app.listen(3000, () => {
  console.log("Servidor Rodando");
});
