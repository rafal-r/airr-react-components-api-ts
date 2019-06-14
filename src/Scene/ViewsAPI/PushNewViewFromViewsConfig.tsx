import React, { SyntheticEvent } from "react";
import ReactDOM from "react-dom";
import { Scene, View, SceneState, TSValidateViewsConfig } from "airr-react";
import CommonView, {
    getNextCommonViewName,
    CommonViewNameTpl
} from "../../views/CommonView";

import "airr-react/dist/airr-react.css";
import "../../css/common.css";

export default class SimpleScene extends Scene {
    pushNewViewFromViewsConfig = (e: SyntheticEvent<HTMLElement>) => {
        this.changeView(CommonViewNameTpl, {
            children: (
                <h2 style={{ textAlign: "center" }}>
                    This view was pushed from SimpleScene's `viewsConfig`
                    <br />
                    special object which defines views specification.
                </h2>
            ),
            style: { backgroundColor: "purple" }
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
                            onClick={this.pushNewViewFromViewsConfig}
                            style={{ fontSize: "2rem" }}
                        >
                            Click me
                        </button>
                    </div>
                )
            }
        },
        [CommonViewNameTpl]: {
            type: CommonView,
            nameGenerator: getNextCommonViewName,
            props: { name: "" },
            sceneProps: {
                //to change scene state when needed (eg. when activated)
            }
        }
    });

    state: SceneState = {
        ...this.state,
        activeViewName: "view-1",
        views: [this.getFreshViewConfig("view-1")]
    };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
