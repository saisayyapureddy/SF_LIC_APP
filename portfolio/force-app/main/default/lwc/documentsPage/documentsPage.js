import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ASSET_file from '@salesforce/contentAssetUrl/SaiResumepdf'; // Example asset file
import JS_HANDBOOK from '@salesforce/contentAssetUrl/SaiResumepdf'; // Example asset file

export default class DocumentsPage extends LightningElement {
    url = ASSET_file; // URL for an existing document
    jsBook = JS_HANDBOOK; // URL for another existing document

    // Handle the upload of files
    handleUploadFinished(event) {
        const uploadedFiles = event.detail.files;
        // Show success message for each uploaded file
        const fileNames = uploadedFiles.map(file => file.name).join(', ');
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success!',
                message: `Successfully uploaded: ${fileNames}`,
                variant: 'success',
            })
        );
    }
}
