({
	validateForm : function(component, event, helper) {
        console.log("in helper");
		var isValid = component.find('newContact').reduce(function (validSoFar, inputComp) {
            inputComp.showHelpMessageIfInvalid();
            inputComp.set('v.validity', {valid:false, badInput :true});
            return validSoFar && inputComp.get('v.validity').valid;
        }, true);
        return isValid;
	}
})