/**
 * page - 组件
 */
import React from "react";
import {useLocation} from "react-router-dom";
import Layout from "../../comps/component-layout/index.js"
import ComponentNav from "../../comps/component-nav/index.js";
import ComponentContentButton from "../../comps/component-content-button/index.js";
import ComponentContentIcon from "../../comps/component-content-icon/index.js";

const comps = {
    component: <ComponentContentButton />,
    button: <ComponentContentButton />,
    icon: <ComponentContentIcon />
}


export default function PageComponent(){
    const arr = useLocation().pathname.split("/")
    const main = comps[arr[arr.length - 1]]
    return(
        <Layout
            nav={<ComponentNav></ComponentNav>}
            main={main}
        >
        </Layout>
    )
}

 