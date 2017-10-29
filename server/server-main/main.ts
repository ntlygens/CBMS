const express = require('express');
const path = require('path');

import { InitCollection } from '../../both/collections/init.collection';
import { WebApp } from 'meteor/webapp';
import * as cors from 'cors/lib/index.js';
import * as bodyParser from 'body-parser/index.js';


async function getInitData( req, res ) {
    const dInitData = await InitCollection.find().fetch();
    res.status(200).json({
        data: dInitData
    })
}


export class InitData {
    start(): void {
        this.InitData();
    }

    InitData() {
        const app = express();

        app.use(cors());

        app.use(bodyParser.urlencoded({ extended: false }));

        app.get('/home', (req, res) => {
            res.status(200).json({
                message: 'We are home'
            })
        });

        app.get('/home/newdata', getInitData, (req, res) => {
            res.status(200).json({
                message: 'Here\'s the new data'
            })
        });


        WebApp.connectHandlers.use(app);
    }
}
