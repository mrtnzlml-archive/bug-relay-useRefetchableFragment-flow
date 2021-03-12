# Problem

Flow throws an error when generating artifacts with `--eagerESModules` and `@refetchable`:

```text
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ __generated__/bugRelayUseRefetchableFragmentFlow.graphql.js:36:20

Cannot assign object literal to node because property bugRelayUseRefetchableFragmentFlowQuery is missing in
ConcreteRequest [1] but exists in module ./bugRelayUseRefetchableFragmentFlowQuery.graphql.js [2] in property
metadata.refetch.operation. [incompatible-type]

     __generated__/bugRelayUseRefetchableFragmentFlow.graphql.js
     33│     "refetch": {
     34│       "connection": null,
     35│       "fragmentPathInResult": [],
 [2] 36│       "operation": require('./bugRelayUseRefetchableFragmentFlowQuery.graphql.js')
     37│     }
     38│   },
     39│   "name": "bugRelayUseRefetchableFragmentFlow",

     node_modules/relay-runtime/util/ReaderNode.js.flow
 [1] 68│   +operation: string | ConcreteRequest,



Found 1 error
```

# Steps to reproduce

1) `yarn install`
2) `yarn run relay-compiler --src=. --schema=schema.graphql --eagerESModules`
3) `yarn run flow` 💥

# Possible solution

The artifact could be generated with `require(…).default` when using `--eagerESModules` option like so:

```diff
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
-     "operation": require('./bugRelayUseRefetchableFragmentFlowQuery.graphql.js')
+     "operation": require('./bugRelayUseRefetchableFragmentFlowQuery.graphql.js').default
    }
  }
```

_(no Flow errors)_
