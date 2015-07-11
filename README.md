# BookProject

a [Sails](http://sailsjs.org) application


Specs for the Rest API

##ABOUTME
##Create aboutCard
 - [POST] request at **/about/create**
 ```sh
  about:{
      "description": "Developer from ....",
      "photo": "/public/img/phoo.jpg",

  }
 ```
  - Response
```sh
  about:{
      "description": "Developer from ....",
      "photo": "/public/img/phoo.jpg",
      "id": 1
  }
```

 ##Get all aboutCard
 - [GET] request at **/about/[id]**
 ```sh
  [{
      "description": "Developer from ....",
      "photo": "/public/img/phoo.jpg",

  },
  ...
  ]
 ```
 ##Update aboutCard
- [PUT] request at **/about/update/[id]**
 ```sh
  [{
      "description": "Developer from ....",
      "photo": "/public/img/phoo.jpg",

  },
  ...
  ]
 ```

 ##Update aboutCard
- [DELETE] request at **/about/destroy/[id]**
  - Response
 ```sh
  StatusCode "200"
 ```

##WORK

###Create a Work area
 - [POST] request at **"/work/create"**
```sh
  work: {
      "name": "Web design"
  }
```
  - Response
```sh
  work: {
      "projects": [],
      "name": "Web design",
      "createdAt": "2015-06-30T15:08:35.963Z",
      "updatedAt": "2015-06-30T15:16:04.007Z",
      "id": 2
  },
```
###Get all work areas 
 - [GET] request at **"/work"**
```sh
  [{
      "projects": [],
      "name": "Web design",
      "createdAt": "2015-06-30T15:08:35.963Z",
      "updatedAt": "2015-06-30T15:16:04.007Z",
      "id": 2
    },
    ...
  ]
```
###Update a work area
 - [PUT] request at **"/works/update/[id]"**
```sh
    work: {
      "name": "Develop"
    }
```
  - Response
```sh
    work: {
      "projects": [],
      "name": "Develop",
      "createdAt": "2015-06-30T15:08:35.963Z",
      "updatedAt": "2015-06-30T15:16:04.007Z",
      "id": 2
    }
```
###Delete an work area
 - [DELETE] request at **"/works/destroy/[id]"**
```sh
  StatusCode "200"
```


##PROJECT

###Create a new Project 

 - [POST] request at **"/project/create"**
```sh
  project: {
    "title": "One Dollar Item",
    "detail": "Our mission was to ...",
    "url" : "www.onedollaritem.org",
    "img" : "/public/img/oneDollarIre.png",
    "work" : 1
  }
```
 - Response
```sh
  project: {
    "id": 1,
    "title": "One Dollar Item",
    "detail": "Our mission was to ...",
    "url": "www.onedollaritem.org",
    "img": "/public/img/oneDollarIre.png",
    "work" : 1
  }
```

###Get all projects under area of work

 - [GET] request at **"/work/[idWork]/projects/"**
```sh
  [
    {
      "title": "One Dollar Item",
      "detail": "Our mission was to ...",
      "url": "www.onedollaritem.org",
      "img": "/public/img/oneDollarIre.png",
      "work" : 1
    },
    ...
  ]
```


###Update a project
 - [PUT] request at **"/project/update/[idProject]"**
```sh
  project: {
    "title": "One Dollar Item",
    "detail": "Our mission was to ...",
    "url": "www.onedollaritem.org",
    "img": "/public/img/oneDollarItem.png",
    "work" : 1
  }
```
 - Response

```sh
  project: {
    "id": 1
    "title": "One Dollar Item",
    "detail": "Our mission was to ...",
    "url": "www.onedollaritem.org",
    "img": "/public/img/oneDollarItem.png",
    "work" : 1
  }
```

###Delete a project

 - [DELETE] request at **"/project/destroy/[idProject]"**
```sh
  StatusCode "200"
```

##ContactWays

###Create a new Way under ContactWays
 - [POST] request at **"/contact"**
```sh
  {
    residence: "México City"
    telephone: "5540128869",
    email: "eve@rocks.com",
    text: "Hi ..."
  }
```
 - Response
```sh
  {
    residence: "México City"
    telephone: "5540128869",
    email: "eve@rocks.com",
    text: "Hi ...",
    id: 1
  }
```

###Get all ways under ContactWays
 - [GET] request at **"/contact"**
```sh
  [{
    residence: "México City"
    telephone: "5540128869",
    email: "eve@rocks.com",
    text: "Hi ...",
    id: 1
  }, 
  ...]
```

###Update a way under ContactWays
 - [PUT] request at **"/contact/:id"**
```sh
  [{
    text: "Hello, this is me...."
  }, 
  ...]
```

 - Response
```sh
  [{
    residence: "México City"
    telephone: "5540128869",
    email: "eve@rocks.com",
    text: "Hello, this is me....",
    id: 1
  }, 
  ...]
```
###Delete a way under ContactWays
 - [DELETE] request at **"/contactWays/1"**
```sh
  StatusCode "200"
```
