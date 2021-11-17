import React from "react";
import { BrowserRouter, Route, Switch, Redirect  } from "react-router-dom";
import "./assets/scss/reset.scss"; 

const Head = React.lazy(() => import("./comps/head/index"))
const HeadContainer = React.lazy(()=>import("./comps/head-container/index"))
const PageDocument = React.lazy(() => import("./pages/document/index"))
const PageComponent  = React.lazy(() => import('./pages/component/index'))
const PageDesign = React.lazy(() => import("./pages/design/index"));
const PageAssets = React.lazy(() => import("./pages/assets/index"));
const PagePlaceholder = React.lazy(() => import('./pages/placeholder/index'))

export default function App(){
  return(
    <BrowserRouter>
      <React.Suspense fallback={<div></div>}>
          <Route path="/">
            <HeadContainer>
              <Head></Head>
            </HeadContainer>
            <Switch>
                <Route path="/component" >
                  <PageComponent />
                </Route>
                <Route path="/design">
                  <PageDesign/>
                </Route>
                <Route path="/document">
                  <PageDocument />
                </Route>
                <Route path="/assets">
                  <PageAssets />
                </Route>
                <Route path="/mirror">
                  <PagePlaceholder name="MIRROR"/>
                </Route>
                <Route path="/version">
                  <PagePlaceholder name="VERSION"/>
                </Route>
                <Route path="/lang">
                  <PagePlaceholder name="LANG"/>
                </Route>
                <Route path="/rtl">
                  <PagePlaceholder name="RTL"/>
                </Route>
                <Route path="/more">
                  <PagePlaceholder name="MORE"/>
                </Route>
                {/* 托底配置 如果没有匹配的 */}
                <Route path="/">
                  <Redirect  to="/component" />
                </Route> 
            </Switch>
          </Route>
      </React.Suspense>
    </BrowserRouter>
  )
}