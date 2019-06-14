import React, { SyntheticEvent } from "react";
import ReactDOM from "react-dom";
import { Scene, SceneState, TSValidateViewsConfig } from "airr-react";
import HelloWorld, { HelloWorldViewName } from "../../views/HelloWorldView";

import "airr-react/dist/airr-react.css";
import "../../css/common.css";

export default class SimpleScene extends Scene {
    updateScene = (e: SyntheticEvent<HTMLElement>) => {
        this.changeView(
            HelloWorldViewName,
            {
                children: (
                    <h2 style={{ textAlign: "center" }}>
                        The scene was altered. Navbar was added.
                    </h2>
                ),
                style: { backgroundColor: "brown" }
            },
            {
                navbar: true
            }
        );
    };

    viewsConfig = TSValidateViewsConfig({
        [HelloWorldViewName]: {
            type: HelloWorld,
            props: {
                name: HelloWorldViewName,
                title: "This is Title in navbar",
                children: (
                    <button
                        onClick={this.updateScene}
                        style={{ fontSize: "2rem" }}
                    >
                        Click me
                    </button>
                )
            }
        }
    });

    state: SceneState = {
        ...this.state,
        activeViewName: HelloWorldViewName,
        views: [this.getFreshViewConfig(HelloWorldViewName)]
    };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
