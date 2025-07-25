import express from "express";
import publicRoutes from "./routes/public.js";

const app = express();
app.use(express.json());

app.use("/", publicRoutes);

// motcha
// 2veUcB3hMHxCus3f
// mongodb+srv://motcha:2veUcB3hMHxCus3f@users.hu8mps7.mongodb.net/?retryWrites=true&w=majority&appName=Users

app.listen(3000, () => {
  console.log("Servidor Rodando");
});
