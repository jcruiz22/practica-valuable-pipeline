
import {describe, it, expect} from '@jest/globals';
import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
  it('responds with Hello World and GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Bye Bye Bye Bye Bye!!!');
  });
});

