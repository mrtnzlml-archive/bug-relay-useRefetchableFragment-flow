// @flow

const { graphql } = require('react-relay');

// Just to generate Relay artifacts:
graphql`
  fragment bugRelayUseRefetchableFragmentFlow on RootQuery
  @refetchable(queryName: "bugRelayUseRefetchableFragmentFlowQuery") {
    node(id: "my-id") {
      __typename
    }
  }
`;
