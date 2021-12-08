const express = require('express');
const multer = require('multer');

var storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function ( req, file, cb ) {
            cb( null, file.originalname);
        }
    }
);
var upload = multer( { storage: storage } );

const app = express();
//start app 
const port = process.env.PORT || 8000;

app.post('/upload', upload.single('imageFile'), (req, res) => {
    if(req.file) {
	console.log(req.file);
        res.json(req.file);
    }
    else throw 'error';
});


app.listen(port, () => 
  console.log(`App is listening on port ${port}.`)
);
