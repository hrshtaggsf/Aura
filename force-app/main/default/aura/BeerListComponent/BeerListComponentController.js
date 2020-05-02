({
    showinfo : function(component, event, helper) {
        var eventSource = event.getSource();
        var beerObj = eventSource.get("v.name");
        console.log("method " + beerObj);
        component.set('v.beerId', beerObj);
        console.log("method ends " + 'v.beerId');
        console.log("In button");
        $A.createComponent(
            "c:BeerDetails",
            {
                "beerId": beerObj,
            },
            function(beerDetails, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    console.log("In SUCCESS");
                    component.find('overlayLib').showCustomModal({
                        header: "Beer Details",
                        body: beerDetails,  	
                        showCloseButton: true,
                        cssClass: "mymodal",
                        
                    })
                    
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                    else if (status === "ERROR") {
                        console.log("Error: " + errorMessage);
                        // Show error message
                    }
            }
        );
    },
    
    handlePress : function(cmp) {
        // Find the button by the aura:id value
        console.log("button: " + cmp.find("findableAuraId"));
        console.log("button pressed");
    }
    
})