/**
 * @File Name          : AccountServiceTest.cls
 * @Description        : 
 * @Author             : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Group              : 
 * @Last Modified By   : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Last Modified On   : 27/3/2020, 11:49:50 pm
 * @Modification Log   : 
 * Ver       Date            Author      		    Modification
 * 1.0    27/3/2020   ChangeMeIn@UserSettingsUnder.SFDoc     Initial Version
**/
@IsTest
private class AccountServiceTest {
    @IsTest
    static void Should_create_account() {
        String acctName = 'Salesforce';
        String acctNumber = 'SFDC';
        String tickerSymbol = 'CRM';
        Test.startTest();
        AccountService service = new AccountService();
        Account newAcct = service.createAccount( acctName, acctNumber, tickerSymbol );
        insert newAcct;
        Test.stopTest();
        List<Account> accts = [ SELECT Id, Name, AccountNumber, TickerSymbol FROM Account WHERE Id = :newAcct.Id ];
        System.assertEquals( 1, accts.size(), 'should have found new account' );
        System.assertEquals( acctName, accts[0].Name, 'incorrect name' );
        System.assertEquals( acctNumber, accts[0].AccountNumber, 'incorrect account number' );
        System.assertEquals( tickerSymbol, accts[0].TickerSymbol, 'incorrect ticker symbol' );
    }
}