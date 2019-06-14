import React from "react";
import ReactDOM from "react-dom";
import {
    Scene,
    Sidepanel,
    TSValidateViewsConfig,
    SidepanelProps,
    TSValidateSidepanelConfig,
    SceneState
} from "airr-react";
import SimpleView, { SimpleViewName } from "../../views/SimpleView";
import "airr-react/dist/airr-react.css";

interface CustomSidepanelProps extends SidepanelProps {
    hideSidepanel: () => void;
}
class CustomSidepanel extends Sidepanel<CustomSidepanelProps> {
    content() {
        return (
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
                I am the Sidepanel. Use below button to close.
                <br />
                <button onClick={this.props.hideSidepanel}>hide me</button>
            </div>
        );
    }
}
export default class SimpleScene extends Scene {
    viewsConfig = TSValidateViewsConfig({
        [SimpleViewName]: {
            type: SimpleView,
            props: {
                name: SimpleViewName
            }
        }
    });

    state: SceneState = {
        ...this.state,
        activeViewName: SimpleViewName,
        sidepanel: TSValidateSidepanelConfig({
            type: CustomSidepanel,
            props: {
                side: "left",
                hideSidepanel: this.hideSidepanel,
                enabled: true,
                isShown: true,
                sizeFactor: 1 / 3,
                animationTime: 200
            }
        }),
        views: [this.getFreshViewConfig(SimpleViewName)]
    };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
