import express from 'express';
import bodyParser from 'body-parser';

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
    AuctionsRepository,
    BetsRepository,
} from './src/Repositories';
import {
    Sequelize,
} from 'sequelize';
import { 
    configureDBConnection, 
} from './configureDBConnection';
import { 
    AuctionSchema,
    BetSchema,
    UserSchema,
} from './src/Schemas';

const sequelize = configureDBConnection(Sequelize);
const userSchema = UserSchema({
    Sequelize,
    sequelize,
});
const auctionSchema = AuctionSchema({
    Sequelize,
    sequelize,
});
const betSchema = BetSchema({
    Sequelize,
    sequelize,
});

const app = express();

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
    AuctionsService: new AuctionsService({
        AuctionBuilder,
        auctionsRepository: new AuctionsRepository({
            Sequelize,
            sequelize,
            auctionSchema,
        }),
    }),
    auctionsAdapter: new AuctionsAdapter(),
    BetsService: new BetsService({
        BetBuilder,
        betsRepository: new BetsRepository({
            Sequelize,
            sequelize,
            betSchema,
        }),
    }),
    BetsAdapter: new BetsAdapter(),
}));

app.listen(3000);
