import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');

import {
    SubastifyWebService,
    AuctionsWebService,
    AuctionsCreateHandler,
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
    AuctionsRetrieveRecentHandler,
    AuctionsUpdateByIdHandler,
    AuctionsDeleteByIdHandler,
    AuctionsCreateBetsHandler,
    AuctionsRetrieveBetsHandler,
} from './src/WebServices';
import {
    AuctionsService,
    BetsService
} from './src/Services';
import {
    AuctionsAdapter,
    BetsAdapter
} from './src/Adapters';
import {
    AuctionBuilder,
    BetBuilder,
} from './src/Model/Builders';
import {
    Sequelize,
} from 'sequelize';
import {
    configureDBConnection,
} from './configureDBConnection';
import {
    configureRepositories
} from './configureRepositories';
import {
    AuctionsRepository,
    BetsRepository,
    UsersRepository,
} from './src/Repositories';
import {
    AuctionSchema,
    BetSchema,
    UserSchema,
} from './src/Schemas';
import { configureServices } from './configureServices';

const sequelize = configureDBConnection(Sequelize);

const {
    betsRepository,
    usersRepository,
    auctionsRepository,
} = configureRepositories({
    AuctionsRepository,
    AuctionSchema,
    BetsRepository,
    BetSchema,
    UsersRepository,
    UserSchema,
    Sequelize,
    sequelize,
});

const auctionsAdapter = new AuctionsAdapter();
const betsAdapter = new BetsAdapter();

const {
    auctionsService,
    betsService
} = configureServices({
    AuctionsService,
    AuctionBuilder,
    auctionsRepository,
    BetsService,
    BetBuilder,
    betsRepository,
    usersRepository,
});

sequelize.sync().then(() => {


    const app = express();
    app.use(cors());
    
    app.use(SubastifyWebService({
        express,
        bodyParser,
        AuctionsWebService,
        AuctionsCreateHandler,
        AuctionsRetrieveHandler,
        AuctionsRetrieveByIdHandler,
        AuctionsRetrieveRecentHandler,
        AuctionsUpdateByIdHandler,
        AuctionsDeleteByIdHandler,
        AuctionsCreateBetsHandler,
        AuctionsRetrieveBetsHandler,
        auctionsAdapter,
        betsAdapter,
        auctionsService,
        betsService,
    }));
    
    app.listen(3001);
});
