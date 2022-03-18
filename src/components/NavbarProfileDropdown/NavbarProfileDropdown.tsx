import React from 'react';

import ProfileCircleDropdown from 'common/ProfileCircleDropdown'
import { connect } from 'react-redux';
import { getCurrentUserInfo } from 'sapredux/selectors'

const NavbarProfileDropdown: React.FC = (props:any) => {
  const { user, loggedIn } = props
  console.log("++++++++++++++++++++++++++++++++", loggedIn)
  return <ProfileCircleDropdown 
    loggedIn={loggedIn}
    username={user && user.RpAccUName}
    image={user && user.FilePathS}
  />
};

const mapStateToProps = (state:any) => ({
  user: getCurrentUserInfo(state.auth),
  loggedIn: state.auth.loggedIn
})

export default connect(mapStateToProps)(NavbarProfileDropdown)