import { LightningElement } from "lwc";

export default class App extends LightningElement {
    originconsultvalue = '';

    get originconsultoptions() {
        return [
            { label: 'Phone', value: 'phone' },
            { label: 'Slack', value: 'slack' },
            { label: 'Cohort', value: 'cohort' },
        ];
    }

    languageLinevalue = 'no';

    get languageLineoptions() {
        return [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
        ];
    }

    IncomingPhoneNumberValue = '';
    
    handlelanguageLineChange(event) {
        this.value = event.detail.value;
    }
}