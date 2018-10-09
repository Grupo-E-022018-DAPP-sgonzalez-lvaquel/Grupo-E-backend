import express from 'express';
import bodyParser from 'body-parser';

import SubastifyWebService from './src/SubastifyWebService';
import AuctionsWebService, {
    AuctionsCreateHandler,
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
    AuctionsRetrieveRecentHandler,
    AuctionsUpdateByIdHandler,
    AuctionsDeleteByIdHandler,
    AuctionsCreateBetsHandler,
    AuctionsRetrieveBetsHandler,
} from './src/AuctionsWebService';
import AuctionsService from './src/AuctionsService';
import BetsService from './src/BetsService';
import AuctionsAdapter from './src/AuctionsAdapter';


const BetsAdapter = {
    parse: (a) => ({betDTO: () => a}),
    serialize: (a) => a
};

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
    AuctionsService: new AuctionsService(),
    AuctionsAdapter: new AuctionsAdapter(),
    BetsService: new BetsService(),
    BetsAdapter,
}));

app.listen(3000);
