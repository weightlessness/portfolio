import * as React from "react";
import ComponentContent from "./ComponentContent";
import ComponentBlock from "./ComponentBlock";
import ComponentLink from "./ComponentLink";
import ComponentColumn from "./ComponentColumn";
import ComponentSublink from "./ComponentSublink";
import ComponentTag from "./ComponentTag";
import ComponentMirror from "./ComponentMirror";
import withErrorBoundary from "../../_hoc/withErrorBoundary";


const GeneratedComponent = withErrorBoundary(({classes, menu, key}) => {

    if (classes.includes('col-1')) {
        return <ComponentColumn menu={menu?.children || []} span={2} title={menu?.name || ''} key={key}/>
    } else if (classes.includes('col-2')) {
        return <ComponentColumn menu={menu?.children || []} span={4} title={menu?.name || ''} key={key}/>
    } else if (classes.includes('col-3')) {
        return <ComponentColumn menu={menu?.children || []} span={6} title={menu?.name || ''} key={key}/>
    } else if (classes.includes('col-4')) {
        return <ComponentColumn menu={menu?.children || []} span={8} title={menu?.name || ''} key={key}/>
    } else if (classes.includes('col-5')) {
        return <ComponentColumn menu={menu?.children || []} span={10} title={menu?.name || ''} key={key}/>
    } else if (classes.includes('col-6')) {
        return <ComponentColumn menu={menu?.children || []} span={12} title={menu?.name || ''} key={key}/>
    } else if (classes.includes('content')) {
        return <ComponentContent menu={menu?.children || []} key={key}/>
    } else if (classes.includes('block')) {
        return <ComponentBlock menu={menu?.children || []} key={key}/>
    } else if (classes.includes('link')) {
        return <ComponentLink menu={menu} key={key}/>
    } else if (classes.includes('sublink')) {
        return <ComponentSublink menu={menu} key={key}/>
    } else if (classes.includes('tag')) {
        return <ComponentTag menu={menu} key={key}/>
    } else if (classes.includes('mirror')) {
        return <ComponentMirror menu={menu} key={key}/>
    }

    return null;
})


export default GeneratedComponent;
