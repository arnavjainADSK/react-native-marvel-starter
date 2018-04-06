import MarvelService from "../services/Marvel";

const client = new MarvelService("characters");

export function getCharacters(name = "") {
    return dispatch => {
        return client.getCharacters(name).then(
            response => {
                dispatch({ type: `GET_CHARACTERS_SUCCESS`, characters: response.data.data.results});
            }
        ).catch((error) => {
            console.log(error)
            dispatch({ type: `GET_CHARACTERS_FAIL`, characters: {fudge: "sfsf"}});
        })
    }
}

export function onSearchTextChange(text) {
    return {
        type: 'SEARCH_TEXT_CHANGE',
        text: text
    }
}