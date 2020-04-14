({
  doCreateContact: function (component, event, helper) {
    alert("in js file");
    var action = component.get("c.saveContact");

    
    action.setParams({
      accountId: component.get("v.accountId"),
      cntct: component.get("v.createContact")
    });

    action.setCallback(this, function (response) {
      var state = response.getState();
         alert(state);
      if (state === "SUCCESS") {
        var responseValue = response.getReturnValue();
        console.log("From server: " + JSON.stringify(responseValue) );
        var componentEvent = component.getEvent("ContactEVT");
        //alert(JSON.stringify(componentEvent));
        alert("firing");
        componentEvent.setParams({
          ContactRecord : responseValue
        });
          alert("before fire");
        componentEvent.fire(); 
          alert("fired");
      }
        
      
        
    });

    $A.enqueueAction(action);
  },
   
   
});