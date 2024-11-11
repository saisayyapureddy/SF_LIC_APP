public with sharing class LicController {

    @AuraEnabled(cacheable=true)
    public static list<LicAccounts__c>getPolicies(String user, String password){
        try {
            return [SELECT AccountStatus__c, AccountType__c, CreatedById, CreatedDate, Id, IsDeleted, 
            LastActivityDate, LastModifiedById, LastModifiedDate, LastReferencedDate,
             LastViewedDate, Name, Nominee_Name__c, OwnerId, Password__c, 
             SystemModstamp, User_Name__c, account_number__c
            FROM LicAccounts__c WHERE User_Name__c= :user AND Password__c= :password ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static Map<String, List<SObject>> getAccountData(String user,String password){
        try {

            LicAccounts__c account = [
                SELECT Id, AccountStatus__c, AccountType__c, Name, Nominee_Name__c, Password__c, User_Name__c
                FROM LicAccounts__c
                WHERE User_Name__c = :user AND Password__c = :password
                LIMIT 1
            ];

            //If account is found retrieve relted payment and Personal info 

            if(account !=null)
            {
                Map<String, List<SObject>> accountData = new Map<String, List<SObject>>();

                // Retrieve all related payment records
                List<Payment__c> payments = [
                    SELECT Name, Payment_Amount__c, Payment_Date_Time__c, Payment_Method__c, Payment_Status__c, Transaction_ID__c,Payment_Address__c
                    FROM Payment__c
                    WHERE Account__c = :account.Id LIMIT 1
                ];
                accountData.put('Payments', payments);
                   

                // Retrieve all related personal info records
                List<Personal_Info__c> personalInfos = [
                    SELECT Full_Name__c, Email_Address__c, Phone_Number__c, Policy_Number__c, Policy_Type__c,Policy_Start_Date__c,Gender__c
                    FROM Personal_Info__c
                    WHERE Account__c = :account.Id LIMIT 1
                ];
                accountData.put('PersonalInfos', personalInfos);

                 // Add account details to the map
                accountData.put('Account', new List<SObject>{ account });
                
                return accountData;
            }
            else {
                throw new AuraHandledException('Invalid username or password');
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}