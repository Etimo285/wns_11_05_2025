import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      emoji
      name
      continent {
        name
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export const GET_CONTINENTS = gql`
  query Continents {
    continents {
      id
      name
    }
  }
`;
