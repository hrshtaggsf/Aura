({
    handleReview : function(component, event, helper) {
        var isValid = helper.validateForm(component, event, helper);
        if(isValid){
            console.log("in isValid");
            var compEvt = component.getEvent("ContactContacts");
            compEvt.setParams({
                "conRecord" :  component.get("v.ContactRecord")
            });
            compEvt.fire();
            console.log("after firing");
        }else {
            alert("please enter all fields");
        }      
    }
})