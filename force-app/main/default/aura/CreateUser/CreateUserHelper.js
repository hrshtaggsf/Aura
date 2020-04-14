({
	getAccountDetails: function (cmp) {
        var action = cmp.get('c.getAccount');
        action.setCallback(this, function (result) {
            if (result.getState() === 'SUCCESS') {
                var acct = result.getReturnValue();
             
                return acct;
                
            } else {
                
                console.log('Error', 'No Account Attached to User', 'error', 'sticky');
            }
        });
        $A.enqueueAction(action);
    },
})