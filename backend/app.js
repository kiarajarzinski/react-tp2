import express from 'express';
import cors from 'cors';
import 'dotenv/config' ;
import { connectDB } from './src/config/database.js';
import makeupRoutes from './src/routes/makeup.route.js';


const app = express();
const PORT = process.env.PORT || 3000;
connectDB();


app.use(cors());
app.use(express.json());
app.use('/api', makeupRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})
