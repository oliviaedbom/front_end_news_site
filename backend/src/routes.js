const pagesController = require('./controllers/pagesController');
const apiController = require('./controllers/apiController');

module.exports = [
  // Ping tester
  {
    method: 'GET',
    path: '/ping',
    handler: (_request, reply) => reply.response('pong').code(200),
    config: {
      description: 'Ping-tests',
    },
  },

  // Start page
  {
    method: 'GET',
    path: '/',
    handler: pagesController.index,
  },

  // About page
  {
    method: 'GET',
    path: '/about',
    handler: pagesController.about,
  },

  // Contact page
  {
    method: 'GET',
    path: '/contact',
    handler: pagesController.contact,
  },

  // Api paths
  {
    method: 'GET',
    path: '/api/v1/articles',
    handler: apiController.articles,
  },

  {
    method: 'GET',
    path: '/static/{file*}',
    handler: {
      directory: {
        path: 'static/',
      },
    },
  },
];
