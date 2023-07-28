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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/call" component={Call} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/results" >
          <ResultsPage
            positiveFeedback={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus eget justo a facilisis. Nullam semper id neque ut malesuada. Aenean elementum lectus eget laoreet tincidunt. Nunc aliquam elit id consequat dignissim. Mauris vitae tellus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum enim sed diam suscipit sodales. Mauris nec ex eget diam sagittis tempor condimentum eu nisl. Cras sagittis pharetra varius. Proin lorem arcu, blandit ac pharetra sed, viverra ut mauris. Ut ut sapien nec erat tincidunt eleifend semper vitae diam. Mauris lacinia tempus ex, a pulvinar justo cursus id. Morbi vitae velit ac nisi imperdiet finibus."}
            negativeFeedback={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus eget justo a facilisis. Nullam semper id neque ut malesuada. Aenean elementum lectus eget laoreet tincidunt. Nunc aliquam elit id consequat dignissim. Mauris vitae tellus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum enim sed diam suscipit sodales. Mauris nec ex eget diam sagittis tempor condimentum eu nisl. Cras sagittis pharetra varius. Proin lorem arcu, blandit ac pharetra sed, viverra ut mauris. Ut ut sapien nec erat tincidunt eleifend semper vitae diam. Mauris lacinia tempus ex, a pulvinar justo cursus id. Morbi vitae velit ac nisi imperdiet finibus."}
            transcript={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus eget justo a facilisis. Nullam semper id neque ut malesuada. Aenean elementum lectus eget laoreet tincidunt. Nunc aliquam elit id consequat dignissim. Mauris vitae tellus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum enim sed diam suscipit sodales. Mauris nec ex eget diam sagittis tempor condimentum eu nisl. Cras sagittis pharetra varius. Proin lorem arcu, blandit ac pharetra sed, viverra ut mauris. Ut ut sapien nec erat tincidunt eleifend semper vitae diam. Mauris lacinia tempus ex, a pulvinar justo cursus id. Morbi vitae velit ac nisi imperdiet finibus."}
          />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
