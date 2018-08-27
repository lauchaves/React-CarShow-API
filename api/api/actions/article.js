import { getArticle, getArticleByStore } from './../../services/article'

export const article  = async (req, res) => {
    const result = await getArticle(req, res);
    res.send(result);
    return res;
};

export const articleStore = async (req, res) => {
    const result = await getArticleByStore(req, res);
    res.send(result);
    return res;
}