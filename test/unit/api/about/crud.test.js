var url ="http://localhost:1337/";
var request = require("supertest")(url);

describe("about model", function(){
	it("insert a new record into about", function(done){

		var data = { 
			description : "Engeniering and electronic background...",
			photo : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xta1/v/t1.0-1/p50x50/11269743_10206513423296819_4430011067814486969_n.jpg?oh=1ec30bec4a9fbb7fa9d36bb3fb433747&oe=562977D6&__gda__=1441801976_ed99f9a511b8c78d4dd834dca4196359"
		};

		request
			.post("about/create")
			.set('Accept', 'application/json')
			.send(data)
			.expect(201)
			.expect('Content-Type', /application\/json/)
			.end(function(err,res){
				if(err)
					throw err

				var about = res.body;
				expect(about).to.have.property('description', data.description);
				expect(about).to.have.property('photo', data.photo);
				expect(about).to.have.property('id');

				done(err);
		});
	});

	it("get all records of about model", function(done) {
		request
			.get("about/")
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
					expect(element).to.have.property('description');
					expect(element).to.have.property('photo');
					expect(element).to.have.property('id');
				});

				done(err);

			});
	});

	it("update a record of about model", function(done){
		request
			.
	});
});