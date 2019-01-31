import * as dao from './fengshui.dao';
import { messages } from '../constants';

const parseDate = (date: string) => {
    const parsed = new Date(date);
    return {
        year: parsed.getFullYear(),
        month: parsed.getMonth() +1,
        day: parsed.getDate()    
    }
}

export const getKuaNumber = async (date: string, sgender: string): Promise<string[]> => {
    const response: string[] = [];
    try {
        console.log({date});
        console.log({sgender});
        const { year, month, day } = parseDate(date);
        const gender = sgender as string;
        const result =  await dao.getKuaNumber(year, month, day, gender);
        response.push(messages.kuanumber + result);
        response.push(messages.relance.astro);
    } catch (e) {
        console.log("Error happened getting kuaNumber" + e);
        response.push(e);
    }
    return response;
};

export const getChineseSign = async (date: string, sgender: string): Promise<string[]> => {
    const response: string[] = [];
    try {
        console.log({date});
        console.log({sgender});

        const { year, month, day } = parseDate(date);
        const gender = sgender as string;
        const res = await dao.getChineseSign(year, month, day, gender);
        response.push(messages.chinesesign + res);
        response.push(messages.relance.advises);
    } catch (e) {
        console.log("Error happened getChineseSign");
        response.push(e);
    }
    return response;
};

export const getChildGender = async (motherAge: number, month: number): Promise<string[]> => {
    const response: string[] = [];
    try {
        const res =  await  dao.getChildGender(motherAge, month);
        response.push(messages.childgender + messages.child[res]);

    } catch (e) {
        console.log("Error happened getChildGender");
        response.push(e);
    }
    return response;
};