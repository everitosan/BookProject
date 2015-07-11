var url ="http://localhost:1337/";
var request = require("supertest")(url);
var id = 0;

describe("Work model", function(){
	it("insert a new record into work", function(done){

		var data = { 
			name: "Develop"
		};

		request
			.post("work/create")
			.set('Accept', 'application/json')
			.send(data)
			.expect(201)
			.expect('Content-Type', /application\/json/)
			.end(function(err,res){
				if(err)
					throw err

				var work = res.body;
				expect(work).to.have.property('name', data.name);
				expect(work).to.have.property('id');
				id = res.body.id;
				done(err);
		});
	});

	it("get all records of work model", function(done) {
		request
			.get("work/")
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
					expect(element).to.have.property('name');
					expect(element).to.have.property('id');
				});

				done(err);

			});
	});

	it("update a record of work model", function(done){

		var data = {
			name : 'DEVELOP'
		}

		request
			.post("work/update/"+ id)
			.set("Accept", "application/json")
			.send(data)
			.expect(200)
			.expect('Content-Type', /application\/json/)
			.end( function(err, res) {
				if(err)
					throw err;

				var object = res.body

				expect(object).to.be.instanceof(Object);
				expect(object).to.have.property('id');
				expect(object).to.have.property('name', data.name);

				done(err);
			})
	});

	it("delete a record of work model", function(done){

		request
			.post("work/destroy/"+ id)
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