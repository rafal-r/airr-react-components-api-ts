import React, { SyntheticEvent } from "react";
import ReactDOM from "react-dom";
import { Scene, View, SceneState } from "airr-react";
import "airr-react/dist/airr-react.css";
import "../../css/common.css";

export default class SimpleScene extends Scene {
    handleBtnClick = (e: SyntheticEvent<HTMLElement>) => {
        this.openMayer({
            name: "greetings",
            appearFrom: "bottom",
            leaveTo: "top",
            content:
                "Greetings stranger, i'm not suprised to see your kind here",
            buttons: [
                {
                    close: true,
                    children: "Farewell"
                }
            ]
        });
    };

    state: SceneState = {
        ...this.state,
        activeViewName: "view-1",
        views: [
            {
                type: View,
                props: {
                    name: "view-1",
                    children: (
                        <div className="foo-wrap">
                            <button
                                onClick={this.handleBtnClick}
                                style={{ fontSize: "2rem" }}
                            >
                                open mayer
                            </button>
                        </div>
                    )
                }
            }
        ]
    };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
