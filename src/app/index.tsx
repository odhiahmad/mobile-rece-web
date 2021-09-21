/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
// import { Helmet } from 'react-helmet-async';
import { Switch, Route, HashRouter } from 'react-router-dom';
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

dayjs.extend(customParseFormat);

export function App() {
  // const { i18n } = useTranslation();
  useInjectSaga({ key: 'saga', saga: mySaga });
  return (
    <HashRouter>
      <GlobalStyle />
      <PaddingStyles />
      <TextStyles />
      <AllignmentStyles />
      <div className="main-screen">
        <Switch>
          {publics.map(({ key, path, component }) => (
            <Route key={key} path={path} component={component} exact />
          ))}
          {privates.map(({ key, path, component }) => (
            <Route key={key} path={path} component={component} exact />
          ))}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}
