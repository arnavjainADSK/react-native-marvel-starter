import { connect } from 'react-redux'
import Search from '../components/Search'
import { onSearchTextChange } from '../actions/marvel';

const mapStateToProps = state => {
  return {
    text: state.marvel.text
  }
};

const mapDispatchToProps = dispatch => {
  return { onSearchTextChange: (text) => {dispatch(onSearchTextChange(text))}}
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;