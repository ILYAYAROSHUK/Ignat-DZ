import React from "react";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
export const PATH = {
    PRE_JUNIOR: "/pre-junior",
}

function Routes() {
    return (
        <div>
            {/*<Switch>*/}
            {/*    <Route exact path={PATH.PRE_JUNIOR} component={PreJunior}/>*/}
            {/*    <Route component={Error404}/>*/}
            {/*</Switch>*/}
        </div>
    );
}

export default Routes;