'use strict';

import 'mocha';
import { assert } from 'chai';
import { getKuaNumber, getChildGender, getChineseSign } from '../../src/fengshui/fengshui.dao';

describe('Fengshui dao tests', () => {

    describe('getKuaNumber', () => {
        it('all params ok', async () => {
            const res = await getKuaNumber(1987, 1, 8, '0');
            assert.equal(5, res);
        });

        it('miss gender params ok', async () => {
            try {
                const res = await getKuaNumber(1987, 1, 8, '-1');
                assert.isTrue(false);
            } catch (e) {
                assert.equal("Unknown gender", e);
            }
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
            const res = await getChineseSign(1987, 1, 8, '0');
            assert.equal("Tiger", res);
        });
    });
});