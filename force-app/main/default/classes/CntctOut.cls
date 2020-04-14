/**
 * @File Name          : AccOut.cls
 * @Description        :
 * @Author             : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Group              :
 * @Last Modified By   : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Last Modified On   : 5/4/2020, 8:38:30 pm
 * @Modification Log   :
 * Ver       Date            Author                  Modification
 * 1.0    4/4/2020   ChangeMeIn@UserSettingsUnder.SFDoc     Initial Version
 **/
public with sharing class CntctOut{
	@AuraEnabled
	public static List<Contact> getCntctList(String acctID){
		String v2 = acctID;
		List<Contact> v1 = new List<Contact>([SELECT 
		                                            ID, 
		                                            FirstName, 
		                                            LastName, 
		                                            Email, 
		                                            Phone, 
		                                            AccountId
		                                      FROM Contact
		                                      WHERE AccountId = :v2]);
		return v1;
	}

	@AuraEnabled
	public static Sobject saveContact(Contact cntct, ID accountId){
        system.debug(cntct);
        cntct.AccountId = accountId;
		insert cntct;
		system.debug(cntct);
		return cntct;
	}
}