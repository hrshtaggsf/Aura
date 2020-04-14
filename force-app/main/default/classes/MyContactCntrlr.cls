public class MyContactCntrlr {
    @AuraEnabled
    public static ID getAccount(){
        String userId = UserInfo.getUserId();
        Try{
            
            User userObj = [SELECT Id, AccountId FROM User WHERE Id=: userId ]; 
            return userObj.AccountId; 
            
        }catch (Exception ex) {
            
            //test comment
            throw new AuraHandledException(ex.getMessage()+' '+ex.getCause()+' '+ex.getLineNumber()+' '+ex.getStackTraceString());
        }
    }
    
    @AuraEnabled
    public Static void createCommunityUser(ID cntctID){
        String userId = UserInfo.getUserId();
        User userObj = [SELECT Id, IsPortalEnabled, PortalRole FROM User WHERE Id=: userId];
        	UserRole portalRole = [Select Id From UserRole Where PortalType = 'None' Limit 1];
        Profile profile1 = [Select Id from Profile where name = 'System Administrator'];
        User accountOwner = new User(
            ProfileId = profile1.Id,
            UserRoleId = portalRole.Id,
            Username = 'admin@testclass.org' + System.currentTimeMillis(),
            Alias = 'admin',
            Email = 'admin@testclass.org',
            EmailEncodingKey = 'UTF-8',
            Lastname = 'admin',
            LanguageLocaleKey = 'en_US',
            LocaleSidKey = 'en_US',
            TimeZoneSidKey = 'America/Chicago'
        );
        insert accountOwner;
        
        System.runAs(accountOwner)
        {
            Account testAccount = new Account(Name = 'testaccount');
            //testAccount.CustomerID__c = '00706260056' ;
            insert testAccount;         
            
            Contact testContact = new Contact(LastName = 'testcontact',
                                              Accountid = testAccount.id);
            insert testContact;
            
            //insert new Welcome_Mail_Info__c(Name = 'IT', Country__c = 'Italy', Email__c = 'abc@italy.com', Phone__c = '1234567891');
        }
        
        String testUserProfile1 = [SELECT id FROM Profile WHERE Name = 'Self Service Portal User' LIMIT 1].id;
        
        User testUser1 = new User(ProfileId = testUserProfile1,
                                 Contactid = [SELECT id FROM Contact WHERE LastName = 'testcontact' LIMIT 1].id,
                                 LastName = 'testuser',
                                 Email = 'testuser@test.com',
                                 Username = 'testuser@test.com',
                                 CompanyName = 'TEST',
                                 Country = 'Italy',
                                 Title = 'title',
                                 Alias = 'alias',
                                 TimeZoneSidKey = 'America/Los_Angeles',
                                 EmailEncodingKey = 'UTF-8',
                                 LanguageLocaleKey = 'en_US',
                                 LocaleSidKey = 'en_US'); 
        insert testUser1;
       
            
            String testUserProfile = [SELECT id FROM Profile WHERE Name = 'Customer Community User' LIMIT 1].id;
            Contact cntct = [Select ID From Contact Where Id=: cntctID];
            Account acct = [Select ID From Account Where ID=: cntct.AccountId];
        
        System.runAs(testUser1){    
        User testUser = new User(ProfileId = testUserProfile,
                                     Contactid = cntctID,
                                     LastName = cntct.LastName,
                                     Email = cntct.Email,
                                     Username = cntct.Email,
                                     CompanyName = acct.Name,
                                     Country = 'Italy',
                                     TimeZoneSidKey = 'America/Los_Angeles',
                                     EmailEncodingKey = 'UTF-8',
                                     LanguageLocaleKey = 'en_US',
                                     LocaleSidKey = 'en_US'); 
            insert testUser; 
          }  
            
          
    }
    
}