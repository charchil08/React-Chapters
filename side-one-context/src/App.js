import React, { Fragment } from "react";
import Provider from "./Provider";
import PackageContext from "./Context"

const Agent = () => {
  return <AgentBond />
}

const AgentBond = () => {
  return (
    <PackageContext.Consumer>
      {
        context => (
          <Fragment>
            <h3>Agent Details : </h3>
            <p>Mission : {context.data.mname}</p>
            <p>Code : {context.data.agent}</p>
            <h2>Mission Status : {context.data.accept}</h2>
            <button onClick={context.isMissionAccepted}>Choose to accept</button>
          </Fragment>
        )
      }
    </PackageContext.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Context API</h1>

      <Provider>
        <Agent />
      </Provider>
    </div>
  )
}

export default App;