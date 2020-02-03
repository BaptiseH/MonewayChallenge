import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Server } from "miragejs"
import * as serviceWorker from './serviceWorker';

new Server({

    seeds(server) {
        server.db.loadData({
          users: [
            { id: 1, adress: 1, email:"flo.cuch@gmail.com", firstname: "Florent", lastname: "Cucherousset", solde: 400, transactions_id:"1,2,3,4,5,6,7,8,9," },
            { id: 2, adress: 2, email:"mat.duc@gmail.com", firstname: "Mathilde", lastname: "Ducaruge", solde: 400, transactions_id:"1,2,3,4,7,8,9,10,11,"  },
            { id: 3, adress: 3, email:"bapt.hec@gmail.com", firstname: "Baptiste", lastname: "Hector", solde: 400, transactions_id:"1,2,3,4,5,6,7,8,9,"  },
            { id: 4, adress: 4, email:"ame.pou@gmail.com", firstname: "Amelie", lastname: "Poulain", solde: 400, transactions_id:"10,11,12,13,14,15,"  },
            { id: 5, adress: 5, email:"quen.si@gmail.com", firstname: "Quentin", lastname: "Simon", solde: 400, transactions_id:"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"  },
            { id: 6, adress: 6, email:"ophe.gra@gmail.com", firstname: "Ophelie", lastname: "Grasso", solde: 400, transactions_id:"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"  },
            { id: 7, adress: 7, email:"ber.laf@gmail.com", firstname: "Bernard", lastname: "Lafarge", solde: 400, transactions_id:"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"  },
            { id: 8, adress: 8, email:"pas.got@gmail.com", firstname: "Pascale", lastname: "Goteberg", solde: 400, transactions_id:"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"  },
            { id: 9, adress: 9, email:"hug.pla@gmail.com", firstname: "Huguette", lastname: "Plantin", solde: 400, transactions_id:"1,2,3,4,5,6,7,8,9,10,11,12,13,"  },
            { id: 10, adress: 10,email:"lou.stiff@gmail.com", firstname: "Louise", lastname: "Stiffurier", solde: 400, transactions_id:"2,3,4,5,7,8,9,10,11,12,13,14,15,"  },
            { id: 11, adress: 11, email:"jea.mou@gmail.com", firstname: "Jean", lastname: "Moulin", solde: 400, transactions_id:"1,2,4,5,6,7,9,10,11,13,14,15,"  },
            { id: 12, adress: 12, email:"pau.zuc@gmail.com", firstname: "Pauline", lastname: "Zucczucc", solde: 400, transactions_id:"6,7,8,9,10,11,12,13,14,15,"  },
            ],
            transactions: [
                { id: 1, amount:20, account:"Galerie Lafayette", date:"02.01.2017", description:"Clothes", in_or_out:0 },
                { id: 2, amount:20, account:"KebabLanterne", date:"02.01.2018", description:"Clothes", in_or_out:1 },
                { id: 3, amount:20, account:"SNCF", date:"02.10.2017", description:"Clothes", in_or_out:0 },
                { id: 4, amount:20, account:"Edeka", date:"07.01.2017", description:"Clothes", in_or_out:0 },
                { id: 5, amount:20, account:"Carrefour", date:"09.11.2019", description:"Clothes", in_or_out:0 },
                { id: 6, amount:20, account:"RATP", date:"18.01.2018", description:"Clothes", in_or_out:1 },
                { id: 7, amount:20, account:"Spotify", date:"21.07.2017", description:"Clothes", in_or_out:0 },
                { id: 8, amount:20, account:"Deezer", date:"05.09.2018", description:"Clothes", in_or_out:0 },
                { id: 9, amount:20, account:"OVH", date:"02.11.2017", description:"Clothes", in_or_out:0 },
                { id: 10, amount:20, account:"DELL", date:"02.04.2018", description:"Clothes", in_or_out:1 },
                { id: 11, amount:20, account:"Boulangerie De Chez Moi", date:"02.05.2019", description:"Clothes", in_or_out:0 },
                { id: 12, amount:20, account:"lafnac.com", date:"01.01.2020", description:"Clothes", in_or_out:0 },
                { id: 13, amount:20, account:"Boucherie Kremer", date:"13.04.2018", description:"Clothes", in_or_out:0 },
                { id: 14, amount:20, account:"Jeff De Bruges", date:"02.11.2019", description:"Clothes", in_or_out:0 },
                { id: 15, amount:20, account:"Tour Eiffel", date:"02.06.2018", description:"Clothes", in_or_out:1 },
                ],
            adress: [
                { id: 1, number:13, street:"rue du mont", postcode:"65200", city:"Florange"},
                { id: 2, number:5, street:"Boulevard des arts", postcode:"12458", city:"Meulun"},
                { id: 3, number:54, street:"Avenue du soldat", postcode:"76514", city:"Epstine"},
                { id: 4, number:30, street:"rue de Charles XI", postcode:"24698", city:"Closiere"},
                { id: 5, number:12, street:"rue du lac", postcode:"10348", city:"Rongrange"},
                { id: 6, number:4, street:"avenue de la fontaine", postcode:"32556", city:"Annecy"},
                { id: 7, number:1, street:"rue des phalanges", postcode:"32501", city:"Plitona"},
                { id: 8, number:26, street:"rue petit", postcode:"64500", city:"Bourgalo"},
                { id: 9, number:30, street:"boulevards de la victoire", postcode:"21685", city:"Minietone"},
                { id: 10, number:57, street:"rue Colin", postcode:"63802", city:"Cedimbourg"},
                { id: 11, number:12, street:"rue des prunes", postcode:"87500", city:"Plontois"},
                { id: 12, number:4, street:"rue de la palatinat", postcode:"30249", city:"Fagnon"},
            ]
                
        })
      },
    routes() {
        this.namespace = "/moneway"
  
        this.get("/users/", schema => { 
          return schema.db.users
        })
        this.get("/adress/", schema => { 
          return schema.db.adress
        })
        this.get("/user/:id", (schema, request) => { 
            let id = request.params.id
            return schema.db.users.find(id)
          })
        this.get("/transaction/:id", (schema, request) => {
            let id = request.params.id

            return schema.db.transactions.find(id)
        })
        this.get("/adress/:id", (schema, request) => { 
            let id = request.params.id
            return schema.db.adress.find(id)
        })
        this.patch("/user/:id", function(schema, request) {
            let id = request.params.id
            let attrs = JSON.parse(request.requestBody);

            return schema.db.users.update(id, attrs)
        })
        this.patch("/adress/:id", function(schema, request) {
            let id = request.params.id
            let attrs = JSON.parse(request.requestBody);

            return schema.db.adress.update(id, attrs)
        })
      }
})

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
