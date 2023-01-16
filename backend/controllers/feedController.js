const asyncHandler = require('express-async-handler')

const Feed = require('../model/feedModel')
// description GET feed

// @route GET /api/feed

// access Private
const getFeeds = asyncHandler(async(req, res) => {
  const feeds = await Feed.find()  
  res.status(200).json({message:'get feed'})



})

// description Set feed

// @route POST /api/feed

// access Private
const setFeed =asyncHandler(async(req, res) => {
    if(!req.body.text){
      res.status(400)
      throw new Error('Please add a text field')

    }

    res.status(200).json({message:'Set feed'})
  
  
})

  // description update feed

// @route PUT /api/feed/:id

// access Private
const updateFeed =asyncHandler( async (req, res) => {
    res.status(200).json({message:`Update feed ${req.params.id}`})
  
  
})

  // description delete feed

// @route Delete /api/goals/:id

// access Private
const deleteFeed =asyncHandler (async(req, res) => {
    res.status(200).json({message:`Delete feed ${req.params.id}`})
  
  
  
})



module.exports = {
  getFeeds,
  setFeed,
  updateFeed,
  deleteFeed 

}
