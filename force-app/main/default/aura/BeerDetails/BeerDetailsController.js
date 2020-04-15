({
    doOrder : function(component, event, helper) {
        var beerId =  component.get('v.beerId');
        var pageRef = component.find('navigation');
        var pageReferenceNav = {
            type: 'standard__component',
            attributes: {
                componentName : 'c__CreateBeerOrder'
            },
            state: {
                "c__beerId" : beerId
            }
        };
        pageRef.navigate(pageReferenceNav);
    }
})