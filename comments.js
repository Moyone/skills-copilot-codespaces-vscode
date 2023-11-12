// Create a web server
// 1. Handle root url
// 2. Handle /comments url
// 3. Handle /comments/new url
// 4. Handle /comments/:id url
// 5. Handle /comments/:id/edit url
// 6. Handle /comments/:id/delete url
// 7. Handle /comments/:id/like url
// 8. Handle /comments/:id/dislike url
// 9. Handle /comments/:id/replies url
// 10. Handle /comments/:id/replies/new url
// 11. Handle /comments/:id/replies/:id url
// 12. Handle /comments/:id/replies/:id/edit url
// 13. Handle /comments/:id/replies/:id/delete url
// 14. Handle /comments/:id/replies/:id/like url
// 15. Handle /comments/:id/replies/:id/dislike url

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const replyController = require('../controllers/replyController');

// 1. Handle root url
router.get('/', (req, res) => {
    res.redirect('/comments');
});

// 2. Handle /comments url
router.get('/comments', commentController.getComments);

// 3. Handle /comments/new url
router.get('/comments/new', commentController.getNewComment);
router.post('/comments/new', commentController.postNewComment);

// 4. Handle /comments/:id url
router.get('/comments/:id', commentController.getComment);

// 5. Handle /comments/:id/edit url
router.get('/comments/:id/edit', commentController.getEditComment);
router.post('/comments/:id/edit', commentController.postEditComment);

// 6. Handle /comments/:id/delete url
router.get('/comments/:id/delete', commentController.getDeleteComment);

// 7. Handle /comments/:id/like url
router.get('/comments/:id/like', commentController.getLikeComment);

// 8. Handle /comments/:id/dislike url
router.get('/comments/:id/dislike', commentController.getDislikeComment);

// 9. Handle /comments/:id/replies url
router.get('/comments/:id/replies', replyController.getReplies);

// 10. Handle /comments/:id/replies/new url
