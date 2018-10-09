import express from 'express';
import bodyParser from 'body-parser';

import SubastifyWebService from './src/SubastifyWebService';
import AuctionsWebService, {
    AuctionsCreateHandler,
    AuctionsCreateBetHandler,
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
    AuctionsUpdateByIdHandler,
    AuctionsDeleteByIdHandler,
} from './src/AuctionsWebService';

const AuctionsService = {
    create: () => Promise.resolve('Auction Created'),
    getAll: () => Promise.resolve('All Auctions Retrieved'),
    get: (id) => Promise.resolve('Auctions Retrieved Id: ' + id),
    delete: (id) => Promise.resolve('Auctions Deleted Id: ' + id),
    update: (id, attrs) => Promise.resolve(`Auction updated id: ${id} with attrs: ${Object.entries(attrs)}`)
};

const AuctionsAdapter = {
    serialize: (a) => a,
};

const BetsService = {
    createBet: (auctionId, betDTO) => Object.assign({}, betDTO, {auctionId})
};

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
    AuctionsCreateBetHandler,
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
    AuctionsUpdateByIdHandler,
    AuctionsDeleteByIdHandler,
    AuctionsService,
    AuctionsAdapter,
    BetsService,
    BetsAdapter,
}));

app.listen(3000);
