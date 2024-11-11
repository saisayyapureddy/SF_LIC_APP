public with sharing class UserController {


   @AuraEnabled
   public static List<User> getUserDetails(){
    try {
        return [SELECT Id, Name, LastLoginDate, IsActive FROM User WHERE IsActive = TRUE];
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }


   @AuraEnabled
   public static void deactivateUser(Id userId) {
       User userToDeactivate = [SELECT Id, IsActive FROM User WHERE Id = :userId LIMIT 1];
       userToDeactivate.IsActive = false;
       update userToDeactivate;
   }



}