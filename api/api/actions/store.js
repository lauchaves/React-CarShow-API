
import { getStore } from './../../services/store'

export const store  = async (req, res) => {
    const result = await getStore(req, res);
    res.send(result);
    return res;
};