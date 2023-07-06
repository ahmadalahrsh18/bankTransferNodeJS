import express from 'express';

import {router as banktransfer_router} from './banktransfer_router.js';

const app = express();


app.use(express.json());

app.use('/api/banktransfer',banktransfer_router)
app.listen(4000,()=>{console.log('app is running');})