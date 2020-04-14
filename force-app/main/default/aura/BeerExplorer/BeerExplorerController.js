({
    handleCompEvent : function(component, event, helper) {
        
        var searchParam = event.getParam("SearchText");
        console.log(searchParam);
        var action = component.get("c.searchBeer");
        action.setParams({
            searchParam : searchParam

        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if (state === 'SUCCESS') {
                var responseValue = response.getReturnValue();
                console.log('responseValue' , responseValue);
                component.set("v.BeerList",responseValue);   

            } else {
                console.log(responseValue.getError());
            }

        });
        $A.enqueueAction(action);
    }
})