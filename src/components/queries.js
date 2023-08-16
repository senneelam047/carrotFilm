import { gql } from "@apollo/client";


export const GET_ALL_FILMS = gql`
query{
    allFilms{
        films{
            id
            title
            episodeID
            director
            releaseDate
        }
    }
}
`;