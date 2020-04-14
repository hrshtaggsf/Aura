({
    doOrder : function(component, event, helper) {
        
        var pageRef = component.find('navigation');
        var pageReferenceNav = {
            type: 'standard__component',
            attributes: {
                componentName : 'c__CreateBeerOrder'
            },
            state: {
                
            }
        };
        pageRef.navigate(pageReferenceNav);
    }
})