({
    handleInit: function(component, event, helper) {
        console.log('in aura handle init method ')
        const urlParams = new URLSearchParams(window.location.search);
        const actionParam = urlParams.get("c__selectedAction");
        console.log('in aura handle init method', actionParam);
        if (actionParam) {
            component.set("v.selectedAction", actionParam);
        }
    },

    handleNavigation: function(component, event, helper) {
        // Set selectedAction based on button click
        const action = event.getSource().get("v.value");
        console.log('in aura handleNavigation method', action);
        component.set("v.selectedAction", action);
    },

    handleHomeIconClick: function(component, event, helper) {
        var navService = component.find("navService");
        var pageReference = {
            type: "standard__navItemPage",
            attributes: {
                apiName: "Main_LIC_APP" // Use the exact API name of the custom Lightning tab
            }
        };

        navService.generateUrl(pageReference)
            .then($A.getCallback(function(url) {
                // Open the custom tab in a new browser tab
                window.open(url, "_blank");
            }))
            .catch($A.getCallback(function(error) {
                console.error("Error generating URL: ", error);
            }));
    },

    logoutHandler: function(component, event, helper) {
        console.log('in logout handler');
        
        // Remove session storage item
        sessionStorage.removeItem('isLoggedIn');
    
        // Display toast message
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Logged Out",
            "message": "You have successfully logged out",
            "type": "success"
        });
        toastEvent.fire();
    
        // Redirect to LIC_App tab
        var navService = component.find("navService");
        var pageReference = {
            type: "standard__navItemPage",
            attributes: {
                apiName: "LIC_App" // Use the exact API name of the custom Lightning tab
            }
        };
        
        navService.navigate(pageReference);
    
        // Attempt to close the current tab
        setTimeout(function() {
            window.open('', '_self');
            window.close();
        }, 500); // Adding a short delay to allow navigation to take effect
    }, 

})

