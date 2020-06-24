/*

undefined
MaaS customer payment sources setup intent create response

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as PaymentSource_ from 'maas-schemas-ts/maas-backend/customers/payment-sources/paymentSource';

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

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/payment-sources/setup-intent/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    setupIntent?: {
      setupIntentId?: Common_.PaymentSourceId;
      type?: PaymentSource_.Type;
      gatewayName?: PaymentSource_.GatewayName;
      clientSecret?: string;
      isDefault?: boolean;
      alias?: PaymentSource_.Alias;
      status?: PaymentSource_.Status;
    } & {
      setupIntentId: Defined;
      type: Defined;
      gatewayName: Defined;
      isDefault: Defined;
      status: Defined;
    };
  } & {
    setupIntent: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      setupIntent: t.intersection([
        t.partial({
          setupIntentId: Common_.PaymentSourceId,
          type: PaymentSource_.Type,
          gatewayName: PaymentSource_.GatewayName,
          clientSecret: t.string,
          isDefault: t.boolean,
          alias: PaymentSource_.Alias,
          status: PaymentSource_.Status,
        }),
        t.type({
          setupIntentId: Defined,
          type: Defined,
          gatewayName: Defined,
          isDefault: Defined,
          status: Defined,
        }),
      ]),
    }),
    t.type({
      setupIntent: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      setupIntent?: {
        setupIntentId?: Common_.PaymentSourceId;
        type?: PaymentSource_.Type;
        gatewayName?: PaymentSource_.GatewayName;
        clientSecret?: string;
        isDefault?: boolean;
        alias?: PaymentSource_.Alias;
        status?: PaymentSource_.Status;
      } & {
        setupIntentId: Defined;
        type: Defined;
        gatewayName: Defined;
        isDefault: Defined;
        status: Defined;
      };
    } & {
      setupIntent: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
