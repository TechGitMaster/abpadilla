const express = require('express');
const router = express.Router();


router.get('/jwt', (req, res) => {
    res.json({datas: "ahahahaha"});
});

module.exports = router;
