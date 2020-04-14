({
    doSearch : function(component, event, helper) {
        
        var componentEvent = component.getEvent("BeerEvent");
        var searchParam = component.find("searchInput").get("v.value");
        console.log(JSON.stringify(searchParam));
        componentEvent.setParams({

            SearchText : searchParam

        });
        
        componentEvent.fire();
        
    }
})