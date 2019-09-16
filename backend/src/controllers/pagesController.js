module.exports = {
  async index(_request, reply) {
    return reply.view('pages/index', { current_path: '/' });
  },

  async about(_request, reply) {
    return reply.view('pages/about', { current_path: '/about' });
  },

  async contact(_request, reply) {
    return reply.view('pages/contact', { current_path: '/contact' });
  },
};
