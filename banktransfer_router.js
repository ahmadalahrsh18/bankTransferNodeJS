import {Router} from 'express'
import { transferAmmount,checkAccount,checkBalanceAvailability } from './banktransfer_controller.js';

export const router = Router();

router.get('/',checkAccount, checkBalanceAvailability , transferAmmount)