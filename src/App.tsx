import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/home-page";
import Call from "./pages/Call/call-page";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/global.scss";
import "./theme/variables.scss";
import { ResultsPage } from "./pages/Results/results-page";
import Login from "./pages/Login";
import { ContextProvider } from "./common/hooks/useInterviewContext";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <ContextProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/call/:callId" component={Call} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/results/:callId" component={ResultsPage}></Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </ContextProvider>
  </IonApp>
);

export default App;
