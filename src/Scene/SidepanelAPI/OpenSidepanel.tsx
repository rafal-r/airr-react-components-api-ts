import React from "react";
import ReactDOM from "react-dom";
import {
    Scene,
    Sidepanel,
    SceneProps,
    TSValidateSidepanelConfig,
    TSValidateViewsConfig
} from "airr-react";
import SimpleView, { SimpleViewName } from "../../views/SimpleView";
import "airr-react/dist/airr-react.css";

const SidepanelConfig = TSValidateSidepanelConfig({
    type: Sidepanel,
    props: {
        side: "top",
        children: (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    paddingTop: "2rem",
                    color: "white",
                    backgroundColor: "purple"
                }}
            >
                I am the Sidepanel
                <br />
                Click on dark cover or drag me out to close.
            </div>
        ),
        enabled: false,
        sizeFactor: 1 / 3,
        animationTime: 200
    }
});

export default class SimpleScene extends Scene {
    constructor(props: SceneProps) {
        super(props);

        this.state = {
            ...this.state,
            activeViewName: SimpleViewName,
            sidepanel: SidepanelConfig,
            views: [this.getFreshViewConfig(SimpleViewName)]
        };
    }

    handleButtonClick = () => {
        return this.openSidepanel();
    };

    viewsConfig = TSValidateViewsConfig({
        [SimpleViewName]: {
            type: SimpleView,
            props: {
                name: SimpleViewName,
                handleButtonClick: this.handleButtonClick
            }
        }
    });
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
