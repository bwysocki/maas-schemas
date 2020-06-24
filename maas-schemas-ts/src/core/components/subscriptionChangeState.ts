/*

undefined
MaaS state schemas

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';

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
  'http://maasglobal.com/core/components/subscriptionChangeState.json';

// SubscriptionChangeState
// The default export. More information at the top.
export type SubscriptionChangeState = t.Branded<
  {
    id?: Units_.Uuid;
    state?: string & ('IN_PROGRESS' | 'COMPLETED' | 'FAILED');
    created?: Units_.Time;
    failureKey?: string & ('UNKNOWN_ERROR' | 'NOT_ELIGIBLE' | 'EXISTING_TICKET');
  } & {
    id: Defined;
    state: Defined;
  },
  SubscriptionChangeStateBrand
>;
export const SubscriptionChangeState = t.brand(
  t.intersection([
    t.partial({
      id: Units_.Uuid,
      state: t.intersection([
        t.string,
        t.union([t.literal('IN_PROGRESS'), t.literal('COMPLETED'), t.literal('FAILED')]),
      ]),
      created: Units_.Time,
      failureKey: t.intersection([
        t.string,
        t.union([
          t.literal('UNKNOWN_ERROR'),
          t.literal('NOT_ELIGIBLE'),
          t.literal('EXISTING_TICKET'),
        ]),
      ]),
    }),
    t.type({
      id: Defined,
      state: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Units_.Uuid;
      state?: string & ('IN_PROGRESS' | 'COMPLETED' | 'FAILED');
      created?: Units_.Time;
      failureKey?: string & ('UNKNOWN_ERROR' | 'NOT_ELIGIBLE' | 'EXISTING_TICKET');
    } & {
      id: Defined;
      state: Defined;
    },
    SubscriptionChangeStateBrand
  > => true,
  'SubscriptionChangeState',
);
export interface SubscriptionChangeStateBrand {
  readonly SubscriptionChangeState: unique symbol;
}

export default SubscriptionChangeState;

// Success
