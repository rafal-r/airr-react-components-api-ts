import React from "react";
import { View, ViewsArray } from "airr-react";

export const CommonViewNameTpl = "common-view-*";
const viewClass = "common-view";

export const getNextCommonViewName = (views: ViewsArray) => {
    return CommonViewNameTpl.replace("*", String(views.length + 1));
};

export const countCommonViews = (views: ViewsArray) => {
    return views.reduce((prev, curr) => {
        if (curr.type === CommonView) {
            prev += 1;
        }

        return prev;
    }, 0);
};

export default class CommonView extends View {
    content() {
        const content =
            typeof this.props.children === "function"
                ? this.props.children()
                : this.props.children;

        return <div className={viewClass}>{content}</div>;
    }
}
