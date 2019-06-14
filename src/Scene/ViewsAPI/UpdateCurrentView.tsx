import React, { SyntheticEvent } from "react";
import ReactDOM from "react-dom";
import { Scene, SceneProps, TSValidateViewsConfig } from "airr-react";
import HelloWorld, { HelloWorldViewName } from "../../views/HelloWorldView";

import "airr-react/dist/airr-react.css";
import "../../css/common.css";

export default class SimpleScene extends Scene {
    constructor(props: SceneProps) {
        super(props);

        this.state = {
            ...this.state,
            activeViewName: HelloWorldViewName,
            views: [this.getFreshViewConfig(HelloWorldViewName)]
        };
    }

    updateCurrentView = (e: SyntheticEvent<HTMLElement>) => {
        this.changeView(HelloWorldViewName, {
            children: (
                <h2 style={{ textAlign: "center" }}>
                    The button was removed and this header was render instead.
                    <br />
                    Background color also changed.
                </h2>
            ),
            style: { backgroundColor: "yellow" }
        });
    };
    
    viewsConfig = TSValidateViewsConfig({
        [HelloWorldViewName]: {
            type: HelloWorld,
            props: {
                name: HelloWorldViewName,
                children: (
                    <div className="foo-wrap">
                        <button
                            onClick={this.updateCurrentView}
                            style={{ fontSize: "2rem" }}
                        >
                            Click me
                        </button>
                    </div>
                )
            }
        }
    });
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
