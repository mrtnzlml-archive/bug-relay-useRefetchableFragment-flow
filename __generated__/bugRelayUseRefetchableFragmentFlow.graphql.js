/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type bugRelayUseRefetchableFragmentFlow$ref: FragmentReference;
declare export opaque type bugRelayUseRefetchableFragmentFlow$fragmentType: bugRelayUseRefetchableFragmentFlow$ref;
export type bugRelayUseRefetchableFragmentFlow = {|
  +node: ?{|
    +__typename: string
  |},
  +$refType: bugRelayUseRefetchableFragmentFlow$ref,
|};
export type bugRelayUseRefetchableFragmentFlow$data = bugRelayUseRefetchableFragmentFlow;
export type bugRelayUseRefetchableFragmentFlow$key = {
  +$data?: bugRelayUseRefetchableFragmentFlow$data,
  +$fragmentRefs: bugRelayUseRefetchableFragmentFlow$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./bugRelayUseRefetchableFragmentFlowQuery.graphql.js')
    }
  },
  "name": "bugRelayUseRefetchableFragmentFlow",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "id",
          "value": "my-id"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        }
      ],
      "storageKey": "node(id:\"my-id\")"
    }
  ],
  "type": "RootQuery",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '49f50c4280da23d1c4eab719ed9a181a';

export default node;
