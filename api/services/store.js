import { getStores } from './../dal/storeRepo';

export const getStore = async (req, res) => {
    const result = await getStores(req, res);
    return result;
};