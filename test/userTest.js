let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../bin/server');
let should = chai.should();

chai.use(chaiHttp);

let User = require('../src/model/user');

//let url = "http://localhost:3000/users"

describe('User', () => {

    before((done) => {
        User.remove({}, (err) => { 
           done();           
        });        
    });

    describe('/POST user', () => {

        it('it should POST a user', (done) => {
            let user = {
                firstName: "Danilo",
                lastName: "Sales",
                email: "dlopessales@gmail.com",
                birthDate: "02/07/1985",
                phone: 5531992771370,
                address: {
                    street: "Rua Alagoas",
                    number: 581,
                    city: "BH",
                    state: "MG",
                    zipcode: "30130160",
                    country: "Brasil"
                }
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
                done();
            });

        })

    })

})