import React, { SyntheticEvent } from "react";
import ReactDOM from "react-dom";
import { Scene, View, SceneProps } from "airr-react";
import "airr-react/dist/airr-react.css";
import "../../css/common.css";

export default class SimpleScene extends Scene {
    constructor(props: SceneProps) {
        super(props);

        this.state = {
            ...this.state,
            activeViewName: "view-1",
            views: [
                {
                    type: View,
                    props: {
                        name: "view-1",
                        children: (
                            <div className="foo-wrap">content of the view</div>
                        )
                    }
                }
            ]
        };
    }

    handleCloseBtnClick = (e: SyntheticEvent<HTMLElement>) => {
        this.closeMayer("mayer1");
    };

    componentDidMount(): any {
        super.componentDidMount();

        this.openMayer({
            name: "mayer1",
            appearFrom: "top",
            leaveTo: "top",
            children: (
                <div>
                    the content of the mayer
                    <br />
                    <br />
                    <button onClick={this.handleCloseBtnClick}>
                        close mayer
                    </button>
                </div>
            )
        });
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
