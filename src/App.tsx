import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Accueil from './pages/Accueil';
/* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */


/* Theme variables */
// import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <div className='App'>
      <IonReactRouter>
        <IonRouterOutlet>
        <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
  </div>
);

const AppAccueil: React.FC = () => (
  <div className='Accueil'>
      <IonReactRouter>
        <IonRouterOutlet>
        <Route exact path="/accueil">
            <Accueil />
          </Route>
          <Route exact path="/">
            <Redirect to="/accueil" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
  </div>
);

export {App, AppAccueil};
