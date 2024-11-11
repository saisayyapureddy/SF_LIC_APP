@IsTest
public class LicControllerTest {

    @isTest
    static void testGetPolicies() {
        // Create a test account
        LicAccounts__c account = new LicAccounts__c(
            User_Name__c = 'testUser',
            Password__c = 'testPassword',
            AccountStatus__c = 'Active',
            AccountType__c = 'Vendor',
            account_number__c = 12345332,
            Name = 'King George'
        );
        insert account;

        // Start the test context
        Test.startTest();
        List<LicAccounts__c> policies = LicController.getPolicies('testUser', 'testPassword');
        Test.stopTest();

        // Assert results
        System.assertEquals(1, policies.size(), 'Should return one policy');
        System.assertEquals('testUser', policies[0].User_Name__c, 'User name should match');
    }

    @isTest
    static void testGetAccountData() {
        // Create a test account
        LicAccounts__c account = new LicAccounts__c(
            User_Name__c = 'testUser',
            Password__c = 'testPassword',
            AccountStatus__c = 'Active',
            AccountType__c = 'Vendor',
            account_number__c = 12345332,
            Name = 'King George'
        );
        insert account;

        // Create related records
        Payment__c payment = new Payment__c(
            Account__c = account.Id,
            Payment_Method__c = 'Debit Card',
            Payment_Amount__c = 200.0,
            Payment_Status__c = 'Pending'
        );
        insert payment;

        Personal_Info__c personalInfo = new Personal_Info__c(
            Account__c = account.Id,
            Full_Name__c = 'Jane Doe',
            Email_Address__c = 'jane.doe@example.com',
            Policy_Number__c = 990908211
        );
        insert personalInfo;

        // Start the test context
        Test.startTest();
        Map<String, List<SObject>> accountData = LicController.getAccountData('testUser', 'testPassword');
        Test.stopTest();

        // Assert results
        System.assertNotEquals(null, accountData, 'Account data should not be null');
        System.assertEquals(1, accountData.get('Payments').size(), 'Should return one payment record');
        System.assertEquals(1, accountData.get('PersonalInfos').size(), 'Should return one personal info record');
        System.assertEquals(1, accountData.get('Account').size(), 'Should return one account record');
    }

    

}
