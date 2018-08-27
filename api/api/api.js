import * as actions from './actions/index';

export const setupApis = app => {
    app.get('/', (req, res) => res.send('What is up ')); // this is for testing
    app.get('/services/stores', actions.store);
    app.get('/services/articles', actions.article);
    app.get('/services/articles/stores/:id', actions.articleStore);
};