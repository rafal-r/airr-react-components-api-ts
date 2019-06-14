import React from "react";
import { View, ViewProps } from "airr-react";

export const SimpleViewName = "simple-view";

interface SimpleViewProps extends ViewProps {
    handleButtonClick?: () => void;
}

export default class SimpleView extends View<SimpleViewProps> {
    content = () => {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    height: "100vh"
                }}
            >
                {" "}
                {this.props.handleButtonClick && (
                    <button
                        onClick={this.props.handleButtonClick}
                        style={{
                            fontSize: "2rem"
                        }}
                    >
                        Click me
                    </button>
                )}
            </div>
        );
    };
}
