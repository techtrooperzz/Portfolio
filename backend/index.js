import express from "express";
import cors from "cors";
import emailRouter from "./routes/email.route.js";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.get("/", (_req, res) => {
    res.json({ message: "Health check" });
});

app.use("/api/email", emailRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
