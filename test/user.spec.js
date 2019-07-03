// Dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const Server = require('../app/server.js');

// Core
const server = new Server();
const app = server.app;
const should = chai.should();

var idUser;

chai.use(chaiHttp);

/**
 * GET /user
 */
 describe('GET /user', () => {
  it('POST /create should create an user with token', (done) => {
    const payload = {   
     'name' : 'testDebug',
     'email' : 'test.debug@debug.com',
     'password' : 'password'
   };

   chai.request(app)
   .post('/auth/register')
   .send(payload)
   .end((err, res) => {
    idUser = res.body.id; 
    res.should.have.status(200);
    done();
  });
 });

  it('POST /create should check the payload body is false', (done) => {
    const payload = {   
     'name' : 'testDebug',
     'email' : 'test.debug@debug.com',
     'paord' : 'password'
   }

   chai.request(app)
   .post('/auth/register')
   .send(payload)
   .end((err, res) => {
    res.should.have.status(400);
    res.text.should.be.eql('{"code":400,"message":"Bad request"}');

    done();
  });
 });

  it('GET /show:id should not get an user by false id', (done) => {
    chai.request(app)
    .get('/user/show/5b2273486614aa58f4')
    .end((err, res) => {
      res.should.have.status(404);
      res.text.should.be.eql('{"code":404,"message":"User not found"}');

      done();
    });
  });

  it('GET /show:id should have not id in url', (done) => {
    chai.request(app)
    .get('/user/show/')
    .end((err, res) => {
      res.should.have.status(404);
      res.text.should.be.eql('{"code":404,"message":"Not Found"}');

      done();
    });
  });

  it('GET /show:id should get an user result with id ', (done) => {
    chai.request(app)
    .get('/user/show/' + idUser)
    .end((err, res) => {
      res.should.have.status(200);

      done();
    });
  });

  it('POST /search should search many users by id', (done) => {
    const payload = {'ids': [idUser]};

    chai.request(app)
    .post('/user/search')
    .send(payload)
    .end((err, res) => {
      res.should.have.status(200);

      done();
    });
  });

  it('POST /search should check the payload body is false', (done) => {
    const payload = {'ids': []};

    chai.request(app)
    .post('/user/search')
    .send(payload)
    .end((err, res) => {
      res.should.have.status(400);
      res.text.should.be.eql('{"code":400,"message":"Bad request"}');

      done();
    });
  });

  it('PUT /update should update user', (done) => {
    const payload = {'name': 'Arnaud'};

    chai.request(app)
    .put('/user/update/' + idUser)
    .send(payload)
    .end((err, res) => {
      res.should.have.status(200);

      done();
    });
  });

  it('DELETE /destroy/:id should delete an user', (done) => {

    chai.request(app)
    .delete('/user/destroy/' + idUser)
    .end((err, res) => {
      res.should.have.status(200);

      done();
    });
  });

  it('DELETE /destroy/:id should have not id in url', (done) => {
    chai.request(app)
    .get('/user/destroy/')
    .end((err, res) => {
      res.should.have.status(404);
      res.text.should.be.eql('{"code":404,"message":"Not Found"}');

      done();
    });
  });
});