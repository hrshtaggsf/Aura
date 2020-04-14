/**
 * @File Name          : BeerSearchAuraService.cls
 * @Description        : 
 * @Author             : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Group              : 
 * @Last Modified By   : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Last Modified On   : 11/4/2020, 12:36:27 am
 * @Modification Log   : 
 * Ver       Date            Author      		    Modification
 * 1.0    7/4/2020   ChangeMeIn@UserSettingsUnder.SFDoc     Initial Version
**/
public with sharing class BeerSearchAuraService {
    private static final String QUERY1 = 'SELECT ID, Name,Alcohol__c,Brewery_Id__c,Brewery_Name__c,id__c,Price__c,Remaining_Quantity__c,Total_Quantity__c,Tags__c FROM Beer__C WHERE Name LIKE :likeParam LIMIT 10';
    private static final String QUERY2 = 'SELECT ID, Name,Alcohol__c,Brewery_Id__c,Brewery_Name__c,id__c,Price__c,Remaining_Quantity__c,Total_Quantity__c,Tags__c FROM Beer__C LIMIT 10';
    
    @AuraEnabled
    public static List<SObject> searchBeer(String searchParam){
          
        String likeParam = '%' +searchParam+ '%';
        String query;
        if (searchParam != Null) {
            query = QUERY1;
        }else {
            query = QUERY2;

        }
         
        List<SObject> sObjectList = Database.query(query);
        
        return sObjectList;


    }
}