import _ from 'lodash';

const marvel = (state = {}, action) => {

  const nextState = _.merge({}, state);

  switch (action.type) {
    case 'GET_CHARACTERS_SUCCESS': {
      nextState.characters = action.characters;
      return nextState;
    }
    case 'SEARCH_TEXT_CHANGE': {
      nextState.text = action.text;
      return nextState;
    }

    default:
      return nextState;
  }
}

export default marvel
