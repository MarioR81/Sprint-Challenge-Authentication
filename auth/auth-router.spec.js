const request = require('supertest');

const server = require('../api/server.js');

describe('server.js', function() {
    
    describe('POST /login', function() {
        
        it('responds with 200 ok', function(done) {
          request(server)
            .post('/api/auth/login')
            .send({
                username: 'Mario',
                password: 'mario'
              })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
              if (err) return done(err);
              done();
            });
        });
        
        it('responds with json', function(done) {
            request(server)
              .post('/api/auth/login')
              .send({
                  username: 'Mario',
                  password: 'mario'
                })
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
          });
       

     
 
    })
})

describe('server.js', function() {
    
    describe('POST /register', function() {
        it('responds with username and Hash and 200', function(done) {
            request(server)
              .post('/api/auth/register')
              .send({
                  username: '1234',
                  password: '1234'
                })
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .expect(201)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
          });
    })

    describe('POST /register', function() {
        it('responds with username and Hash and 200', function(done) {
            request(server)
              .post('/api/auth/register')
              .send({
                  username: 'Bill',
                  password: 'billiscool'
                })
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .expect(201)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
          });
    })

    describe('POST /register', function() {
        it('responds with username and Hash and 200', function(done) {
            request(server)
              .post('/api/auth/register')
              .send({
                  username: 'testing',
                  password: 'sucks'
                })
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .expect(201)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
          });
    })
})