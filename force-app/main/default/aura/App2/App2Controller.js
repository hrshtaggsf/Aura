({
    doInit: function (component, event, helper) {
        var action = component.get("c.getCntctList");
        
        action.setParams({ acctID: component.get("v.recordId") });
        // Create a callback that is executed after
        // the server-side action returns
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Alert the user with the value returned
                // from the server
                var responseValue = response.getReturnValue();
                console.log("From server: " + responseValue);
                component.set("v.cntctList", responseValue);
                // You would typically fire a event here to trigger
                // client-side notification that the server-side
                // action is complete
            }
        });
        
        // optionally set storable, abortable, background flag here
        
        // A client-side action could cause multiple events,
        // which could trigger other events and
        // other server-side action calls.
        // $A.enqueueAction adds the server-side action to the queue.
        $A.enqueueAction(action);
    },
    
    handleClick: function (component, event, helper) {
        var eventSource = event.getSource();
        
        var Id = eventSource.get("v.name");
        
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            recordId: Id,
            slideDevName: "detail"
        });
        navEvt.fire();
    },
    
    handleQuickContactEvent : function (component , event , helper){
        alert("handeling");
        var availableContact = component.get("v.cntctList");
        console.log(JSON.stringify(availableContact));
        var contactRecord = event.getParam("ContactRecord");
        console.log(JSON.stringify(contactRecord));
        availableContact.push(contactRecord);
        console.log(JSON.stringify(availableContact));
        component.set("v.cntctList",availableContact);
        alert("Finish");
    },
    
    
   
});