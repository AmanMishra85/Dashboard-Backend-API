import express from 'express';
import GetAllData from '../controller/GetAllData.js';
import InsertData from '../controller/InsertData.js';
import DeleteData from '../controller/DeleteData.js';
import GetStartYear from '../controller/GetStartYear.js';
import GetEndYear from '../controller/GetEndYear.js';
import TableData from '../controller/TableData.js';
import {Counter1,Counter2,Counter3,Counter4} from '../controller/Counter.js'

const router = express.Router();

router.post('/',GetAllData)
router.post('/table',TableData)
router.get('/start_Year',GetStartYear);
router.get('/end_Year',GetEndYear);
router.get('/counter1',Counter1);
router.get('/counter2',Counter2);
router.get('/counter3',Counter3);
router.get('/counter4',Counter4);

router.post('/insert',InsertData);
router.post('/delete',DeleteData);



export default router;