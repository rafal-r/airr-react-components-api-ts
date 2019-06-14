import React, { SyntheticEvent } from "react";
import ReactDOM from "react-dom";
import { Scene, View, SceneProps, TSValidateViewsConfig } from "airr-react";
import CommonView from "../../views/CommonView";

import "airr-react/dist/airr-react.css";
import "../../css/common.css";

export default class SimpleScene extends Scene {
    constructor(props: SceneProps) {
        super(props);

        this.state = {
            ...this.state,
            activeViewName: "view-1",
            views: [this.getFreshViewConfig("view-1")]
        };
    }

    pushNewViewFromRawConfigDefinition = (e: SyntheticEvent<HTMLElement>) => {
        this.changeView({
            type: CommonView,
            props: {
                name: "view-from-raw-config",
                children: (
                    <h2 style={{ textAlign: "center" }}>
                        This view was pushed by passing raw object specifying
                        view's configuration.
                    </h2>
                ),
                style: { backgroundColor: "green" }
            }
        });
    };

    viewsConfig = TSValidateViewsConfig({
        "view-1": {
            type: View,
            props: {
                name: "view-1",
                children: (
                    <div className="foo-wrap">
                        <button
                            onClick={this.pushNewViewFromRawConfigDefinition}
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
