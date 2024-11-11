import { LightningElement, track } from 'lwc';

export default class NavBar extends LightningElement {
    @track isSidebarClosed = false;

    get sidebarClass() {
        return this.isSidebarClosed ? 'sidebar closed' : 'sidebar';
    }

    get toggleIcon() {
        return this.isSidebarClosed ? '▶' : '◀'; // Change icons based on sidebar state
    }

    toggleSidebar() {
        this.isSidebarClosed = !this.isSidebarClosed;
        this.dispatchEvent(new CustomEvent('toggle'));
    }

    AccountsHandler(event) {
        const action = event.target.getAttribute('data-action');
        this.navigateTo(action);
    }

    documentsHandler(event) {
        const action = event.target.getAttribute('data-action');
        this.navigateTo(action);
    }

    navigateTo(action) {
        const navigateEvent = new CustomEvent('navigate', { detail: action });
        this.dispatchEvent(navigateEvent);
    }


}
