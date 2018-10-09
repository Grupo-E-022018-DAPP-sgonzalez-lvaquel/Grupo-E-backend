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


const AuctionsAdapter = {
    serialize: (a) => a,
};

const BetsService = {
    createBet: (auctionId, betDTO) => Promise.resolve(Object.assign({}, betDTO, {auctionId})),
    getByAuctionId: (auctionId) => Promise.resolve([{id:1, auctionId}])
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
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
    AuctionsRetrieveRecentHandler,
    AuctionsUpdateByIdHandler,
    AuctionsDeleteByIdHandler,
    AuctionsCreateBetsHandler,
    AuctionsRetrieveBetsHandler,
    AuctionsService: new AuctionsService(),
    AuctionsAdapter,
    BetsService,
    BetsAdapter,
}));

app.listen(3000);
