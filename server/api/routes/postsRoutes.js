module.exports = (app) => {
  const posts = require('../controllers/postsController')

  app.route('/posts')
    .get(posts.get_all_posts)
    .post(posts.add_post)

  app.route('/post/:id')
    .get(posts.get_post)

  app.route('/posts/:id')
    .put(posts.update_post)
    .delete(posts.delete_post)
}
