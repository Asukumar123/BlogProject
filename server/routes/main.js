const router = require('express').Router()
const Post = require('../models/Post');


// router.get('/' , (req , res)=>{
//    res.render('index');
// })

router.get('/about' , (req , res)=>{
    res.render('about');// router code here
})


// router.get("/", async (req, res) => {
//  const locals={
//     title:'Nodejs View engine',
//     description:'hello welcome blog post'
//  } 
//  try{
//     const data=await Post.find();
//     res.render('index',{locals,data})
//  }catch(err){
//   console.log("error");
//  }

// });
router.get("/", async (req, res) => {
  try{
  
    const locals={
       title:'Nodejs View engine',
       description:'hello welcome blog post'
    } 
    let perPage = 10;
    let page = req.query.page || 1;

    const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec();

    // Count is deprecated - please use countDocuments
    // const count = await Post.count();
    const count = await Post.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render('index', { 
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
   
    });

  } catch (error) {
    console.log(error);
  }

   });


module.exports  = router