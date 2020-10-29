import {deleteElementsInsideDiv} from'./html_service_templates';
import {addTextToElement} from './html_service_templates';
// import {createTextArea} from './html_service_templates';
import {loadElementFromDatabaseToPanel} from './html_service_templates';

export var passwordCheckTrue = () => {
    var greetingsOnSuccesfullLogin = ('Witaj w trybie edycji \n Proszę wybrać dział by rozpocząć zmiany');
    console.log('password is true');
    deleteElementsInsideDiv('infoPanel');
    addTextToElement('infoPanel', greetingsOnSuccesfullLogin);
    addLeftPanelButtonsServices(true);
};

export var passwordCheckFalse = () => {
    console.log('password is false');
    deleteElementsInsideDiv('infoPanel');
    addTextToElement('infoPanel', 'ZŁE HASŁO');
};
// var
export var addLeftPanelButtonsServices = (editModeOn: boolean) => {
    (<HTMLBodyElement>document.getElementById('streamId'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'stream', editModeOn);
});
    (<HTMLBodyElement>document.getElementById('contactId'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'contact', editModeOn);
});
    (<HTMLBodyElement>document.getElementById('dioceseId'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'diocese', editModeOn);
});
    (<HTMLBodyElement>document.getElementById('comunityId'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'community', editModeOn);
});
    (<HTMLBodyElement>document.getElementById('sacramentsId'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'sacraments', editModeOn);
});
    (<HTMLBodyElement>document.getElementById('massId'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'mass', editModeOn);
});
(<HTMLBodyElement>document.getElementById('massIdCopy'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'mass', editModeOn);
});
};