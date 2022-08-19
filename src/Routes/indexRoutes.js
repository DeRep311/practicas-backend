const express = require('express');
const router  = express.Router();

router.use('/productos',require('./API'))
module.exports=router;
