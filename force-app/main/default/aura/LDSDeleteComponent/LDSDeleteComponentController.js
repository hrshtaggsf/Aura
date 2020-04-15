({
	handleDeleteContact: function(component, event, helper) {
       
           
            component.find("recordCreator").deleteRecord(function(deleteResult) {
                if (deleteResult.state === "SUCCESS" || deleteResult.state === "DRAFT") {
                    // record is saved successfully
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Delete",
                        "message": "The record was Deleted." + deleteResult.id
                    });
                    resultsToast.fire();
                    var pageRef = component.find('navigation');
                    var pageReferenceNav = {
                        type: 'standard__objectPage',
                        attributes: {
                            objectApiName: 'Beer__c',
                            actionName: 'list'
                        },
                        state: {
                           
                        }
                    };
                    pageRef.navigate(pageReferenceNav);
                } else if (deleteResult.state === "INCOMPLETE") {
                    // handle the incomplete state
                    console.log("User is offline, device doesn't support drafts.");
                } else if (deleteResult.state === "ERROR") {
                    // handle the error state
                    console.log('Problem saving contact, error: ' + JSON.stringify(deleteResult.error));
                } else {
                    console.log('Unknown problem, state: ' + deleteResult.state + ', error: ' + JSON.stringify(deleteResult.error));
                }
            });
        }
})