var rp = require('request-promise-native');

const baseUrl = 'https://fengshui-api.com/api/v1';
const token = process.env.fengshuitoken;

const getOptions = (url: String) => {
    return {
        method: 'GET',
        json: true,
        uri : url,
        rejectUnauthorized: false, 
        insecure: true
    };
} 

export const getKuaNumber = async (year: number, month: number, day: number, gender: string): Promise<number> => {
    try {
        const url = `${baseUrl}/findKuaNumber?token=${token}&year=${year}&month=${month}&day=${day}&gender=${gender}`;
        console.log(url);
        const res = await rp(getOptions(url));
        if (res.status === 'ok') {
            return res.result;
        }
        throw (res.status)
    } catch (e) {
        console.log("Error happened getting kuaNumber");
        throw e;
    }
};

export const getChineseSign = async (year: number, month: number, day: number, gender: string): Promise<string> => {
    try {
        const url = `${baseUrl}/findChineseSignOfYear?token=${token}&year=${year}&month=${month}&day=${day}&gender=${gender}`;
        console.log(url);
        const res = await rp(getOptions(url));
        if (res.status === 'ok') {
            return res.result;
        }
        throw (res.status)
    } catch (e) {
        console.log("Error happened getting kuaNumber");
        throw e;
    }
};

export const getChildGender = async (motherAge: number, month: number): Promise<string> => {
    try {
        const url = `${baseUrl}/getChildGender?token=${token}&age=${motherAge}&month=${month}`;
        console.log(url);
        const res = await rp(getOptions(url));
        if (res.status === 'ok') {
            return res.result;
        }
        throw (res.status)
    } catch (e) {
        console.log("Error happened getting kuaNumber");
        throw e;
    }
};