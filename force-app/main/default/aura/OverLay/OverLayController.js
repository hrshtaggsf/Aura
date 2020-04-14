({
    createModal : function(component, event, helper) {
        component.find('overlayLib').showCustomModal({
            header: "Application Confirmation",
            body: "modalBody",
            footer: "in footer",  	
            showCloseButton: true,
            cssClass: "mymodal",
            closeCallback: function() {
                alert('You closed the alert!');
            }
        })
    },
    navigateURL : function(component, event, helper) {
        var pageRef = component.find('navigation');
        var pageReferenceNav = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: "00B2w000002qikKEAQ"
            }
        };
        pageRef.navigate(pageReferenceNav);
    },
    
    createButton : function(cmp) {
         console.log("In button");
        $A.createComponent(
            "lightning:button",
            {
                "aura:id": "findableAuraId",
                "label": "Press Me",
                "onclick": cmp.getReference("c.handlePress")
            },
            function(newButton, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    console.log("In SUCCESS");
                    var body = cmp.get("v.body");
                    body.push(newButton);
                    cmp.set("v.body", body);
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