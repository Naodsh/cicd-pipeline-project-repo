const request = require('supertest');
let server;

beforeEach(() => {
  // Clear the module cache so a fresh server starts for every test
  jest.resetModules();
  server = require('./server');
});

afterEach((done) => {
  server.close(done);
});

describe('API Endpoints', () => {
  test('GET / returns app info', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('version');
  });

  test('GET /health returns healthy status', async () => {
    const res = await request(server).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});
