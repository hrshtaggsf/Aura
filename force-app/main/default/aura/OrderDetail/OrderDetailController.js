({
    doInit : function(component, event, helper) {
        var pageRef = component.get("v.pageReference");
        console.log("In order detail");
        if(pageRef){
            var state = pageRef.state;
            component.set("v.orderId",state.c__orderId),
            console.log("in do INIT -- 1" + state.c__orderId);
            console.log("in do INIT -- 2" + component.get("v.orderId"));
            component.find("recordViewer").reloadRecord();
			console.log("reloaded");

        }
    }
})