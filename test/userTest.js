let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../bin/server');
let should = chai.should();

chai.use(chaiHttp);

let User = require('../src/model/user');

let url = "http://localhost:3000/users"

describe('Users', () => {

    beforeEach((done) => {
        User.remove({}, (err) => { 
           done();           
        });        
    });
    describe('/POST user', () => {

        it('it should POST a user', (done) => {
            let user = {
                firstName: "Danilo",
                lastName: "Sales",
                email: "dlopessales@gmail.com"
            }
            chai.request(server)
                .post('/users')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.have.property("_id");
                    done();
                });
        })
    })

    describe('/GET ALL users', () => {

        it('it should GET ALL users', (done) => {

            chai.request(server)
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body.should.have.property("email").eql("dlopessales@gmail.com");
                done();
            });

        })

    })

})