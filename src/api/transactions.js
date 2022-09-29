const express = require('express');
const { Transaction } = require('../db/models');
const { getDate } = require('../utils');

const router = express.Router();

/**
 * Get transactions grouped by date, month, or year between two intervals 
 * Sample query: /api/transactions/intervals?orderBy=day&startDate=2021-04&endDate=2022-09
 */
 router.get('/intervals', async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Please log in' });
      }
      const { startDate, endDate, orderBy } = req.query;
  
      if (!startDate || !endDate){
        return res.status(400).json({ error: 'Mising start or end date' });
      }
  
      const isValidStartDate = Date.parse(startDate); 
      const isValidEndDate = Date.parse(endDate); 
  
      if (isNaN(isValidStartDate) || isNaN(isValidEndDate)){
        return res.status(400).json({ error: 'Invalid date. Please input date in yyyy-mm-dd format' });
      }
  
      const validOrderByOptions = ['day', 'month', 'year'];
      if (orderBy && !validOrderByOptions.includes(orderBy)){
        return res.status(400).json({ error: 'Invalid order by option' });
      }
  
      // Default value: group by date
      const orderByParam = orderBy || "day";
  
      const t = {}
      const transactions = await Transaction.getTransactionsForRange(req.user.id, startDate, endDate); 
      for (transaction of transactions){
        const date = getDate(transaction.date, orderByParam); 
        const amount = Math.round(transaction.amount, 2);
        if (date?.length > 0){
          if (date in t){
            t[date] += amount;
          } else {
            t[date] = amount;
          }
        }
      }
      res.json({ t });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
