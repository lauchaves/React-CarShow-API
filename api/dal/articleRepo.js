import article from './../models/articleModel';
import mongoose from 'mongoose';

export const getArticles = async (req,res) => {
    try{
        await article.find((err, articles) => {
            console.log(res);
            if(err) return res.status(404).send({success: false, error_code: 404, error_msg:err});
            res.status(200).jsonp({articles, success: true, total_elements: articles.length });
        });
    }
    catch(err){
        res.send(err);
    };
};


export const getArticleStore = async (req, res, id) => {
    try {
        await article.find({store_id: id}, (err, articles) =>{
            if(err) return res.status(404).send({success: false, error_code: 404, error_msg:"Bad Request"});
            articles.length ? res.status(200).jsonp({articles, success: true, total_elements: articles.length }) : res.status(404).send({success: false, error_code: 404, error_msg:"Record not found"});;
        });
    }
    catch (err) {
        res.send(err);
    };
};