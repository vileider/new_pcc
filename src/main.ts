
import {deleteElementsInsideDiv} from'./html_service_templates';
import {createDiv} from './html_service_templates';
import {addTextToElement} from './html_service_templates';
import {createInputField} from './html_service_templates';
import {addButton} from './html_service_templates';
import {checkLoginAndPasswordWithFetch} from './fetch_service';
import {addLeftPanelButtonsServices} from './html_js_functions';


var saveTypedLPIntoObject = () => {
    var loginAndPasswordHolder = {
        login: '',
        password: ''
    };
    loginAndPasswordHolder.login = (
        <HTMLInputElement>document.getElementById('loginField')).value;
    (<HTMLInputElement>document.getElementById('loginField')).value = '';  // clearing field
    loginAndPasswordHolder.password = (
        <HTMLInputElement>document.getElementById('passwordField')).value;
        (<HTMLInputElement>document.getElementById('passwordField')).value = ''; // clearing field
    console.log(loginAndPasswordHolder);
    checkLoginAndPasswordWithFetch(loginAndPasswordHolder);
};

var createLoginEnvironment =  () => {
    deleteElementsInsideDiv('infoPanel');
    createDiv('infoPanel', 'loginDiv');
    addTextToElement('loginDiv', 'Login  ');
    createInputField('loginDiv', 'loginField');
    createDiv('infoPanel', 'passwordDiv');
    addTextToElement('passwordDiv', '\n Password');
    createInputField('passwordDiv', 'passwordField');
    addButton('infoPanel', 'Login', 'loginButtonId');
    var loginButton = document.getElementById('loginButtonId');
    (<HTMLBodyElement>loginButton).addEventListener('click', saveTypedLPIntoObject );
};

(<HTMLHtmlElement>document.getElementById('loginLeftLinkId'))
.addEventListener('click', () => {createLoginEnvironment();
});

addLeftPanelButtonsServices(false);
