/*

undefined
Request schema for update a state of a specific booking with a TSP ID from a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as Configurator_ from 'maas-schemas-ts/core/components/configurator';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';
import * as CustomerSelection_ from 'maas-schemas-ts/core/components/customerSelection';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/tsp/bookings-update/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    tspId?: Booking_.TspId;
    state?: 'RESERVED' | 'ACTIVATED' | 'ON_HOLD' | 'EXPIRED';
    configurator?: Configurator_.Configurator;
    meta?: BookingMeta_.BookingMeta;
    terms?: Booking_.Terms;
    customerSelection?: CustomerSelection_.CustomerSelection;
  } & {
    tspId: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_.TspId,
      state: t.union([
        t.literal('RESERVED'),
        t.literal('ACTIVATED'),
        t.literal('ON_HOLD'),
        t.literal('EXPIRED'),
      ]),
      configurator: Configurator_.Configurator,
      meta: BookingMeta_.BookingMeta,
      terms: Booking_.Terms,
      customerSelection: CustomerSelection_.CustomerSelection,
    }),
    t.type({
      tspId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId?: Booking_.TspId;
      state?: 'RESERVED' | 'ACTIVATED' | 'ON_HOLD' | 'EXPIRED';
      configurator?: Configurator_.Configurator;
      meta?: BookingMeta_.BookingMeta;
      terms?: Booking_.Terms;
      customerSelection?: CustomerSelection_.CustomerSelection;
    } & {
      tspId: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success