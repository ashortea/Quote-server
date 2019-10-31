const router = require('express').Router();
const Quote = require('../db').import('../models/quotes');

// GET ALL
router.get('/', (req, res) => { 
    Quote.findAll()
        .then(quote => res.status(200).json(quote))
        .catch(err => res.status(500).json({
            error: err
        }))
})



// POST
router.post('/', (req, res) => {
    const quoteFromRequest = {
        quote: req.body.quote,
        author: req.body.author,
        owner: req.body.owner
        
    }

    Quote.create(quoteFromRequest)
        .then(quote => res.status(200).json(quote))
        .catch(err => res.json(req.errors));
})



// UPDATE BY ID
router.put('/:id', (req, res) => {
    Quote.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(quote => res.status(200).json(quote))
    .catch(err => res.json({
        error: err
    }))
})

// DELETE BY ID
router.delete('/:id', (req, res) => {
    Quote.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(quote => res.status(200).json(quote))
    .catch(err => res.json({
        error: err
    }))
})

module.exports = router;