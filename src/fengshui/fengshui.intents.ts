import {
    DialogflowConversation
  } from 'actions-on-google'
import { messages, advises } from '../constants';
import { getKuaNumber, getChildGender, getChineseSign } from './fengshui.services';

export const advise = (conv: DialogflowConversation) => {
    const rand = Math.floor(Math.random() * advises.length);
    conv.ask(advises[rand]);
}
export const defFengshui = (conv: DialogflowConversation) => {
    conv.ask(messages.def.fengshui);    
}

export const defKuaNumber = (conv: DialogflowConversation) => {
    conv.ask(messages.def.kuanumber);    
}

export const kuaNumberIntent = async (conv: DialogflowConversation) => {
    const gender: string = conv.parameters.gender as string;
    const date: string = conv.parameters.date as string;
    const responses = await getKuaNumber(date, gender);
    responses.forEach(e => {
        conv.ask(e);    
    });
}

export const astroSignIntent = async(conv: DialogflowConversation) => {
    const gender: string = conv.parameters.gender as string;
    const date: string = conv.parameters.date as string;
    const responses = await getChineseSign(date, gender);
    responses.forEach(e => {
        conv.ask(e);    
    });}

export const etymologieFengshuiIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.etymologie);    
}