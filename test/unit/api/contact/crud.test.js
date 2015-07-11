var url ="http://localhost:1337/";
var request = require("supertest")(url);
var id = 0;

describe("Contact model", function(){
	it("insert a new record into contact", function(done){

		var data = {
		    residence: "México City",
		    telephone: "5540128869",
		    email: "eve@rocks.com",
		    text: "Hi! ..."
		  };

		request
			.post("project/create")
			.set('Accept', 'application/json')
			.send(data)
			.expect(201)
			.expect('Content-Type', /application\/json/)
			.end(function(err,res){
				if(err)
					throw err

				var contact = res.body;
				expect(contact).to.have.property('residence', "México City");
				expect(contact).to.have.property('telephone', "5540128869");
				expect(contact).to.have.property('email', "eve@rocks.com");
				expect(contact).to.have.property('text', "Hi! ...");
				expect(contact).to.have.property('id');
				id = res.body.id;
				done(err);
		});
	});

	it("get all records of Contact model", function(done) {
		request
			.get("project/")
			.set("Accept", "application/json")
			.expect(200)
			.expect('Content-Type', /application\/json/)
			.end( function(err, res) {
				if (err)
					throw err;
				var collection = res.body;

				expect(collection).to.be.a('array');

				collection.forEach(function(element){	
					expect(element).to.be.instanceof(Object);
					expect(element).to.have.property('residence');
					expect(element).to.have.property('telephone');
					expect(element).to.have.property('email');
					expect(element).to.have.property('text');
					expect(element).to.have.property('id');
				});

				done(err);

			});
	});

	it("update a record of contact model", function(done){

		var data = {
			text: "Hello, this is me...."
		}

		request
			.post("contact/update/"+ id)
			.set("Accept", "application/json")
			.send(data)
			.expect(200)
			.expect('Content-Type', /application\/json/)
			.end( function(err, res) {
				if(err)
					throw err;

				var contact = res.body

				expect(contact).to.be.instanceof(Object);
				expect(contact).to.have.property('residence', "México City");
				expect(contact).to.have.property('telephone', "5540128869");
				expect(contact).to.have.property('email', "eve@rocks.com");
				expect(contact).to.have.property('text', "Hello, this is me....");
				expect(contact).to.have.property('id');

				done(err);
			})
	});

	it("delete a record of contact model", function(done){

		request
			.post("contact/destroy/"+ id)
			.set("Accept", "application/json")
			.expect(200)
			.expect('Content-Type', /application\/json/)
			.end( function(err, res) {
				if(err)
					throw err;

				var object = res.body

				expect(object).to.be.instanceof(Object);
				expect(object).to.have.property('id');

				done(err);
			})
	});
});