({
    openNewTab: function(component, event, helper) {
        var actionLabel = event.getSource().get("v.label");
        var url;

        // Determine the URL based on the button clicked
        if (actionLabel === "Open Account Details") {
            url = '/lightning/cmp/c__QuickActionPage?selectedAction=account';
        } else if (actionLabel === "Open Payment Details") {
            url = '/lightning/cmp/c__QuickActionPage?selectedAction=payment';
        } else if (actionLabel === "Open Documents") {
            url = '/lightning/cmp/c__QuickActionPage?selectedAction=documents';
        }

        // Open the specified URL in a new tab
        window.open(url, '_blank');
    }
})
