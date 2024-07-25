

const colors = require('colors');
const mongoose = require('mongoose')
mongoose.connect(process.env.URI )
.then((res)=>console.log('> Connected...'.bgCyan))
.catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red ))


