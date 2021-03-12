/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type bugRelayUseRefetchableFragmentFlow$ref = any;
export type bugRelayUseRefetchableFragmentFlowQueryVariables = {||};
export type bugRelayUseRefetchableFragmentFlowQueryResponse = {|
  +$fragmentRefs: bugRelayUseRefetchableFragmentFlow$ref
|};
export type bugRelayUseRefetchableFragmentFlowQuery = {|
  variables: bugRelayUseRefetchableFragmentFlowQueryVariables,
  response: bugRelayUseRefetchableFragmentFlowQueryResponse,
|};
*/


/*
query bugRelayUseRefetchableFragmentFlowQuery {
  ...bugRelayUseRefetchableFragmentFlow
}

fragment bugRelayUseRefetchableFragmentFlow on RootQuery {
  node(id: "my-id") {
    __typename
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "bugRelayUseRefetchableFragmentFlowQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "bugRelayUseRefetchableFragmentFlow"
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "bugRelayUseRefetchableFragmentFlowQuery",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "node(id:\"my-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "c9ab3a20ece10dd6e076837ab576193c",
    "id": null,
    "metadata": {},
    "name": "bugRelayUseRefetchableFragmentFlowQuery",
    "operationKind": "query",
    "text": "query bugRelayUseRefetchableFragmentFlowQuery {\n  ...bugRelayUseRefetchableFragmentFlow\n}\n\nfragment bugRelayUseRefetchableFragmentFlow on RootQuery {\n  node(id: \"my-id\") {\n    __typename\n    id\n  }\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '49f50c4280da23d1c4eab719ed9a181a';

export default node;
