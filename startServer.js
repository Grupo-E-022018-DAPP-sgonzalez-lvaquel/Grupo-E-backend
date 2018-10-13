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
    AuctionBuilder
} from './src/Model/Builders';
import {
    AuctionsRepository
} from './src/Repositories';

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
        auctionsRepository: new AuctionsRepository(),
    }),
    AuctionsAdapter: new AuctionsAdapter(),
    BetsService: new BetsService(),
    BetsAdapter: new BetsAdapter(),
}));

app.listen(3000);
