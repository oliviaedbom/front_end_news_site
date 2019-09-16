const Article = require('../models/article');

module.exports = {
  articles(_request, reply) {
    const articles = Article.all();
    return reply.response({ status: 'success', articles });
  },

  async about(_request, reply) {
    return reply.view('pages/about', { current_path: '/about' });
  },

  async contact(_request, reply) {
    return reply.view('pages/contact', { current_path: '/contact' });
  },
};
