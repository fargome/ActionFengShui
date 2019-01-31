'use strict';

import 'mocha';
import { assert } from 'chai';
import { getKuaNumber, getChildGender, getChineseSign } from '../../src/fengshui/fengshui.services';

describe('Fengshui services tests', () => {

    const date = '1987-01-12T12:00:00+01:00';

    describe('getKuaNumber', () => {
        it('all params ok', async () => {
            const res = await getKuaNumber(date, '0');
            
            assert.equal("Votre chiffre Kua est le 5", res[0]);
            assert.equal(2, res.length);

        });
    });

    /*describe('getChildGender', () => {
        it('all params ok', async () => {
            const res = await getChildGender(20, 1);
            assert.equal("", res);
        });
    });*/

    describe('getChineseSign', () => {
        it('all params ok', async () => {
            const res = await getChineseSign(date, '0');
            assert.equal(2, res.length);
            assert.isTrue(res[0].indexOf('Tiger') > -1);
        });
    });
});