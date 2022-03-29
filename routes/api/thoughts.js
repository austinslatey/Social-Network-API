const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createAthought,
    addReaction,
    updateAthought,
    deleteAthought,
    removeAreaction
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(createAthought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateAthought)
    .delete(deleteAthought)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/:reactionId')
    .delete(removeAreaction)

module.exports = router;