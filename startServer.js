import express from 'express';
import bodyParser from 'body-parser';

import SubastifyWebService from './src/SubastifyWebService';
import AuctionsWebService, {
    AuctionsCreateHandler,
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
    AuctionsUpdateByIdHandler,
} from './src/AuctionsWebService';

const AuctionsService = {
    create: () => Promise.resolve('Auction Created'),
    getAll: () => Promise.resolve('All Auctions Retrieved'),
    get: (id) => Promise.resolve('Auctions Retrieved Id: ' + id),
    update: (id, attrs) => Promise.resolve(`Auction updated id: ${id} with attrs: ${Object.entries(attrs)}`)
};

const AuctionsAdapter = {
    serialize: (a) => a,
};

const app = express();

app.use(bodyParser.json())
    .use(SubastifyWebService({
        express,
        AuctionsWebService,
        AuctionsCreateHandler,
        AuctionsRetrieveHandler,
        AuctionsRetrieveByIdHandler,
        AuctionsUpdateByIdHandler,
        AuctionsService,
        AuctionsAdapter,
    }));

app.listen(3000);
