import store from './../models/storeModel';

export const getStores = async (req, res) => {
    try{
        await store.find((err, stores) => {
            console.log(res);
            if(err) res.status(500).send({success: false, error_code: 500, error_msg:err});
            res.status(200).jsonp({stores, success: true, total_elements: stores.length });
        });
    }
    catch(err){
        res.send(err);
    };
};