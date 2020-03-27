const request = require('supertest');

const server = require('./jokes-router.js');

describe('server.js', function() {
    
    describe('GET /api/jokes', function() {
        it('should return 200 OK', async function(done) {
            request(server)
            .get('/api/jokes')
            .expect(200);
            done();
        })
    
        it('responds with json', function() {
            request(server)
            .get('/api/jokes')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        });
    });
});