import React from "react";
import { View } from "airr-react";

export const HelloWorldViewName = "hello-world-view";

export default class HelloWorld extends View {
    content() {
        const content =
            typeof this.props.children === "function"
                ? this.props.children()
                : this.props.children;

        return <div className={HelloWorldViewName}>{content ? content : "What up!"}</div>;
    }
}
