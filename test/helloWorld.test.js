
// import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import app from '../src/server.mjs';

describe('GET /', () => {
  it('responds with Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});