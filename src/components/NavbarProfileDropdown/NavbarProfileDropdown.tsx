import React from 'react';

import ProfileCircleDropdown from 'common/ProfileCircleDropdown'
import { connect } from 'react-redux';
import { getCurrentUserInfo } from 'sapredux/selectors'

const NavbarProfileDropdown: React.FC = (props:any) => {
  const { user, loggedIn } = props
  return <ProfileCircleDropdown 
    loggedIn={loggedIn}
    username={user && user.username}
    image={user && user.image}
  />
};

const mapStateToProps = (state:any) => ({
  user: getCurrentUserInfo(state.auth),
  loggedIn: state.auth.loggedIn
})

export default connect(mapStateToProps)(NavbarProfileDropdown)