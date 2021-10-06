/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';

import { GlobalStyle } from 'styles/global-styles';
import PaddingStyles from 'styles/paddings';
import TextStyles from 'styles/texts';
import AllignmentStyles from 'styles/allignment';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
// import { useTranslation } from 'react-i18next';
import mySaga from 'store/sagas';
import { useInjectSaga } from 'utils/redux-injectors';
import publics from 'app/routes/public';
import privates from 'app/routes/private';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import { setUpAxios } from 'services';
import { getToken } from 'utils/cookie';

import { login } from 'store/auth/actions';
import ScrollToTop from './routes/scroll-to-top';

interface PropTypes {
  isLoggedin: boolean;
}

dayjs.extend(customParseFormat);
// INITIALIZE AXIOS INSTANCE WITH INTERCEPTORS
setUpAxios();

function Apps({ isLoggedin = false }: PropTypes) {
  // INJECT LOGIN AND SAGA
  // const { i18n } = useTranslation();
  useInjectSaga({ key: 'saga', saga: mySaga });
  const dispatch = useDispatch();
  const token = getToken();
  if (token) {
    dispatch(login());
  }
  return (
    <HashRouter>
      <ScrollToTop />
      <GlobalStyle />
      <PaddingStyles />
      <TextStyles />
      <AllignmentStyles />
      <div className="main-screen">
        <Switch>
          {!isLoggedin &&
            publics.map(({ key, path, component }) => (
              <Route key={key} path={path} component={component} exact />
            ))}
          {isLoggedin &&
            privates.map(({ key, path, component }) => (
              <Route key={key} path={path} component={component} exact />
            ))}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}

const mapStateToProps = state => ({
  isLoggedin: state.auth.isLoggedin,
});

const withConnect = connect(mapStateToProps, null);

export default compose<React.ComponentType>(withConnect, React.memo)(Apps);
