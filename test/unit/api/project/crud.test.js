var url ="http://localhost:1337/";
var request = require("supertest")(url);
var id = 0;

describe("Project model", function(){
	it("insert a new record into project", function(done){

		var data = { 
			title: 'OneDollarItem',
			detail: 'Our mission was too...',
			url: 'http://onedollaritem.org',
			img: '/public/img/onedollaritemlogo.png',
			work: 1
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

				var work = res.body;
				expect(work).to.have.property('title', 'OneDollarItem');
				expect(work).to.have.property('detail', 'Our mission was too...');
				expect(work).to.have.property('url', 'http://onedollaritem.org');
				expect(work).to.have.property('img', '/public/img/onedollaritemlogo.png');
				expect(work).to.have.property('work', 1);
				expect(work).to.have.property('id');
				id = res.body.id;
				done(err);
		});
	});

	it("get all records of project model", function(done) {
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
					expect(element).to.have.property('title');
					expect(element).to.have.property('detail');
					expect(element).to.have.property('url');
					expect(element).to.have.property('img');
					expect(element).to.have.property('work');
					expect(element).to.have.property('id');
				});

				done(err);

			});
	});

	it("update a record of project model", function(done){

		var data = {
			img: '/public/img/OneDollarItem.png'
		}

		request
			.post("project/update/"+ id)
			.set("Accept", "application/json")
			.send(data)
			.expect(200)
			.expect('Content-Type', /application\/json/)
			.end( function(err, res) {
				if(err)
					throw err;

				var object = res.body

				expect(object).to.be.instanceof(Object);
				expect(object).to.have.property('title', 'OneDollarItem');
				expect(object).to.have.property('detail', 'Our mission was too...');
				expect(object).to.have.property('url', 'http://onedollaritem.org');
				expect(object).to.have.property('img', '/public/img/OneDollarItem.png');
				expect(object).to.have.property('work');
				expect(object).to.have.property('id');

				done(err);
			})
	});

	it("delete a record of project model", function(done){

		request
			.post("project/destroy/"+ id)
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