/*

undefined
Schema for MODE_TRAM meta field

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_TRAM.json';

// MODE_TRAM
// The default export. More information at the top.
export type MODE_TRAM = t.Branded<{}, MODE_TRAMBrand>;
export const MODE_TRAM = t.brand(
  t.type({}),
  (x): x is t.Branded<{}, MODE_TRAMBrand> => true,
  'MODE_TRAM',
);
export interface MODE_TRAMBrand {
  readonly MODE_TRAM: unique symbol;
}

export default MODE_TRAM;

// Success