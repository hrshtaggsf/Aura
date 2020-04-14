({
    doInit : function(component, event, helper) {
        
        component.find("recordCreator").getNewRecord(
            "Beer__c", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.record");
                var error = component.get("v.recordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }else{
                    console.log("Record template initialized: " + rec.apiName);
                    //alert("Template initiated");    
                }
                
            })
        );
    },
    
    handleSaveContact: function(component, event, helper) {
       
           
            component.find("recordCreator").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    // record is saved successfully
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved." + saveResult.id
                    });
                    resultsToast.fire();
                    
                } else if (saveResult.state === "INCOMPLETE") {
                    // handle the incomplete state
                    console.log("User is offline, device doesn't support drafts.");
                } else if (saveResult.state === "ERROR") {
                    // handle the error state
                    console.log('Problem saving contact, error: ' + JSON.stringify(saveResult.error));
                } else {
                    console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
                }
            });
        },
    
    handleDeleteContact: function(component, event, helper) {
       
           
            component.find("recordCreator").deleteRecord(function(deleteResult) {
                if (deleteResult.state === "SUCCESS" || deleteResult.state === "DRAFT") {
                    // record is saved successfully
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Delete",
                        "message": "The record was saved." + deleteResult.id
                    });
                    resultsToast.fire();
                    
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