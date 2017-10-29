import { MongoObservable } from 'meteor-rxjs';
import { InitModel } from '../models/init.model';

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

export const InitCollection = new MongoObservable.Collection<InitModel>('initcollection');

