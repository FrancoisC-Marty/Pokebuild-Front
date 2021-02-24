import { connect } from 'react-redux';
import Favorites from '../../components/Favorites/index.tsx';

import { toggleFav } from '../../actions/boolean';

const mapStateToProps = (state) => ({
  isDrawer: state.boolean.isDrawer,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFav: () => {
    dispatch(toggleFav());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);