({
    doclick : function(component, event, helper) {
        console.log("in parent js");
        var childCmp = component.find("childCmp");
        alert(childCmp);
        childCmp.Child("values passed");
        console.log("after childCmp");
    },
    handleclick : function(component, event, helper) {
        alert("From child");
    }
})