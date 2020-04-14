trigger RollUp on Contact (After Insert,After Update,After Delete , After Undelete) {
	
    List <Contact> cntctListToAdd = new  List<Contact>();
    List <Contact> cntctListToSub = new  List<Contact>();
    Set <Account> accntList = new  Set<Account>();
   
    If(Trigger.isInsert || Trigger.isUndelete){
        for (Contact cntct : Trigger.New){
            if(cntct.AccountId != NULL){
                
                cntctListToAdd.add(cntct);
                
            }
        }
    }
    
     If(Trigger.isDelete){
        for (Contact cntct : Trigger.old){
          if(cntct.AccountId != NULL){
                
                cntctListToAdd.add(cntct);
                
            }
        }
    }
    
    
    
    
    
    
    
}