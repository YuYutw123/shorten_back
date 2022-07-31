const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// @route     GET /:code
// @desc      Redirect to long/original URL
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      var tpl  =  $("#tpl").html();
      var source = document.getElementById('#tpl').innerHTML;
      var template = Handlebars.compile(source);
      var html = template(context);
      $(body).html(html);
      return res.redirect("http://localhost:5000");
    } else {
      return res.status(404).json('No url found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;