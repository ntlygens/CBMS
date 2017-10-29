"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meteor_rxjs_1 = require("meteor-rxjs");
/*import SimpleSchema from 'simpl-schema';

export const Inits = new Mongo.Collection<InitModel>('inits');
const Schemas = <any>{};

Schemas.Init = new SimpleSchema({
    first_name: {
        type: String,
        label: 'First Name',
        max: 200,
        required: true
    }
});


Inits.attachSchema(Schemas.Init);*/
exports.InitCollection = new meteor_rxjs_1.MongoObservable.Collection('initcollection');
