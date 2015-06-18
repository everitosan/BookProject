# BookProject

a [Sails](http://sailsjs.org) application


Specs for the Rest API

##ABOUTME
##Create aboutCard
 - [POST] request at **/aboutMe**
 ```sh
  about:{
      "description": "Developer from ....",
      "photo": "/public/img/phoo.jpg",

  }
 ```
##WORK

###Create a Work area
 - [POST] request at **"/works"**
```sh
  work: {
      "name": "develop"
  }
```
  - Response
```sh
  work: {
      "id" : 1,
      "name": "develop"
  }
```
###Get all work areas 
 - [GET] request at **"/works"**
```sh
  [
    {
      "id" : 1,
      "name": "develop"
    },
    ...
  ]
```
###Update a work area
 - [PUT] request at **"/works/1"**
```sh
    work: {
      "name": "Develop"
    }
```
  - Response
```sh
    work: {
      "id": 1
      "name": "Develop"
    }
```
###Delete an work area
 - [DELETE] request at **"/works/1"**
```sh
  StatusCode "200"
```

###Create a new Project 

 - [POST] request at **"/works/develop"**
```sh
  proyect: {
    "title": "One Dollar Item",
    "detail": "Our mission was to ...",
    "url" : "www.onedollaritem.org",
    "img" : "/public/img/oneDollarIre.png",
    "work" : "develop"
  }
```
 - Response
```sh
  proyect: {
    "id": 1,
    "title": "One Dollar Item",
    "detail": "Our mission was to ...",
    "url": "www.onedollaritem.org",
    "img": "/public/img/oneDollarIre.png",
    "work" : "develop"
  }
```

###Get all projects

 - [GET] request at **"/works/develop"**
```sh
  [
    {
      "title": "One Dollar Item",
      "detail": "Our mission was to ...",
      "url": "www.onedollaritem.org",
      "img": "/public/img/oneDollarIre.png",
      "work" : "develop"
    },
    ...
  ]
```


###Update a project
 - [PUT] request at **"/works/develop/1"**
```sh
  proyect: {
    "title": "One Dollar Item",
    "detail": "Our mission was to ...",
    "url": "www.onedollaritem.org",
    "img": "/public/img/oneDollarItem.png",
    "work" : "develop"
  }
```
 - Response

```sh
  proyect: {
    "id": 1
    "title": "One Dollar Item",
    "detail": "Our mission was to ...",
    "url": "www.onedollaritem.org",
    "img": "/public/img/oneDollarItem.png",
    "work" : "develop"
  }
```

###Delete a project

 - [DELETE] request at **"/works/develop/1"**
```sh
  StatusCode "200"
```

##ContactWays

###Create a new Way under ContactWays
 - [POST] request at **"/contactWays"**
```sh
  way: {
    "type": "Residence",
    "content": "México City"
  }
```
 - Response
```sh
  way: {
    "id": 1
    "type": "Residence",
    "content": "México City"
  }
```

###Get all ways under ContactWays
 - [GET] request at **"/contactWays"**
```sh
  [{
    "id": 1
    "type": "Residence",
    "content": "México City"
  }, 
  ...]
```

###Update a way under ContactWays
 - [PUT] request at **"/contactWays/1"**
```sh
  [{
    "type": "Actual Residence",
    "content": "México City"
  }, 
  ...]
```

 - Response
```sh
  [{
    "id": 1
    "type": "Actual Residence",
    "content": "México City"
  }, 
  ...]
```
###Delete a way under ContactWays
 - [DELETE] request at **"/contactWays/1"**
```sh
  StatusCode "200"
```
