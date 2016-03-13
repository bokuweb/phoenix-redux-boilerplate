import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Blog from '../components/blog';
import * as blog from '../actions/blog';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  actions :{
    blog: bindActionCreators(blog, dispatch),
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
