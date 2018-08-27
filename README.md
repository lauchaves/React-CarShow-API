# React Car Show & API

React Car Show & API using 

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [MongoDB](https://www.mongodb.com/)
* [Google Chrome](https://google.com/chrome/)

### Installation / Running

#### React CarShow
Checkout this repo, go to React-CarShow folder, install dependencies, then start the webpack process with the following:

```
> git clone https://github.com/lauchaves/React-CarShow-API
> cd React-CarShow-API
> cd React-CarShow
> npm install
> npm start
```

#### Stores API
Checkout this repo, go to api folder, install dependencies, then start the webpack process with the following:

```
> git clone https://github.com/lauchaves/React-CarShow-API
> cd React-CarShow-API
> cd api
> npm install
> babel-node server.js
```

#### MongoDB database creation

For this API the following DB setup was made by running the following commands in the mongo shell:

```
> mongo
> use stores
> db.stores.insert({id:1,address:"Somewhere over the rainbow",name: "Super Store"});
WriteResult({ "nInserted" : 1 })
> db.articles.insert({id: 1, description: "The best soda", name: "Coca Cola", price:2, total_in_shelf: 55, total_in_vault: 40, store_name: "Super Store", store_id:1});
WriteResult({ "nInserted" : 1 })
> db.articles.insert({id: 2, description: "The best quality of shoes in a green color", name: "green shoes", price:20.15, total_in_shelf: 25, total_in_vault: 40, store_name: "Super Store", store_id:1});
WriteResult({ "nInserted" : 1 })

```

## Screenshots

* [Screenshots](https://drive.google.com/drive/folders/1GhScjIBIyo0_Wq1zknlW-XmMbsNOv6n5?usp=sharing)
