import { api, LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class DynamicRecordAction extends LightningElement {
// recordId and ObjectApiName are defaulted by the record page for which the flexipage is present
    @api recordId;
    @api objectApiName;
    @api componentType;
    @api componentTitle;
    @api toastTitle;
    @api toastBody;
    @api dra__activateToast = false;
    @api formDensity;
    @api numberofColumns;
    

    @track formFields = [];
    @track progress;
    @track completionValue;

    totalFormFields;
    fields;
    errors=[];

//API get/set method to parse array and REGEX replace characters for formatting. 
@api
get fieldList(){
    return this.formFields.join();
    }
set fieldList(value){
    if(value) {
        let fieldsArray = value.replace(/^[,\s]+|[,\s]+$/g, '').replace(/\s*,\s*/g, ',').split(',');
        this.formFields = fieldsArray;
    } else {
        this.formFields = [];
        }
    }


// populate formfields length 
connectedCallback(){
this.totalFormFields = this.formFields.length;
} 

 // handle success is leveraged in the update button in the html file and used to power the toast option
 handleSuccess(event) {
     if(this.dra__activateToast){
    const evt = new ShowToastEvent({
        title: this.toastTitle,
        message: this.toastBody,
        variant: 'success',
        });
        this.dispatchEvent(evt);
        }
    }
}