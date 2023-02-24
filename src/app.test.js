const app = require('./app')
const supertest = require('supertest')
const { it } = require('node:test')
const request = supertest(app)

describe('/test endpoint', () => {
  it('should return a response', async () => {
    const response = await request.get('/test')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello world')
  })
})
