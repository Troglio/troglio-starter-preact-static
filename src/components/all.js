import React from 'react'
import { SiteData, RouteData, Link } from 'react-static'
import {Templates, Layouts} from "../../themes/blank/index"


export default (props) => { 
    if (props.preview){
        let Template = (props.routeData.template && Templates[props.routeData.template.toLowerCase()]) || Templates[props.routeData.kind]
        let Layout = (props.routeData.layout && Layouts[props.routeData.layout.toLowerCase()]) || Layouts["default"]
        
        return (
            <Layout site={props.siteData} >
                <Template site={props.siteData} page={props.routeData}/>
            </Layout>
        )
    } else {

        return (
            <SiteData render={(siteData) => {
                return (
                    <RouteData render={(routeData) => {
                        let Template = (routeData.page.template && Templates[routeData.page.template.toLowerCase()]) || Templates[routeData.page.kind]
                        let Layout = (routeData.page.layout && Layouts[routeData.page.layout.toLowerCase()]) || Layouts["default"]
                        return (
                            <Layout site={siteData} >
                                <Template site={siteData} page={routeData.page}/>
                            </Layout>
                        )    
                    }} />
                )
            }} />
        )
    }
}
