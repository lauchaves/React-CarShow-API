import { getArticles, getArticleStore } from './../dal/articleRepo';

export const getArticle = async (req, res) => {
    const result = await getArticles(req, res);
    return result;
};

export const getArticleByStore = async (req, res) => {
    const storeId=req.params.id;
    const result = await getArticleStore(req, res,storeId);
    return result;

}
