import {getInfoPanelDataForEachLeftPanelButton} from './fetch_service';
import {sendEditResultToJson} from './fetch_service';
// import { parse } from 'querystring';
export var createInputField = (idOfInputfieldPasteArea: string, idOfInputField: string) => {
    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = idOfInputField;
    var placeToPasteInputField = document.getElementById(idOfInputfieldPasteArea);
    (<HTMLBodyElement>placeToPasteInputField).appendChild(inputField);
};
export var createDiv = (divPlacementId: string, divsID: string) => {
    var div = document.createElement('div');
    div.id = divsID;
    var placeToAddDiv = document.getElementById(divPlacementId);
    (<HTMLBodyElement>placeToAddDiv).appendChild(div);
};
export var deleteElementsInsideDiv = async (idOfPlaceToClear: string) => {
     var placeToClear = document.getElementById(idOfPlaceToClear);
    (<HTMLBodyElement>placeToClear).innerHTML = '';
};
export var addTextToElement = (textPlacementId: string, textToPaste: string) => {
    var placeToAddText = document.getElementById(textPlacementId);
    (<HTMLBodyElement>placeToAddText).innerText += textToPaste;
};
export var addButton = (buttonPlacementId: string, buttonText: string, buttonId: string) => {
    var btn = document.createElement('button');
    btn.id = buttonId;
    btn.innerHTML = buttonText;
    (<HTMLBodyElement>document.getElementById(buttonPlacementId)).appendChild(btn);
};
export var createTextArea = (areaPlacementId: string, areaID: string) => {
    var placeToAddText = document.getElementById(areaPlacementId);
    var textArea = document.createElement('textarea');
    textArea.id = areaID;
    (<HTMLBodyElement>placeToAddText).appendChild(textArea);
};
export var loadElementFromDatabaseToPanel = async (
    textPlacementId: string, typeOfElement: string, editmodeOn: boolean) => {
        var nameOfPartAndData = {
            nameOfPart: typeOfElement,
            data: ''
        };
var copyReturnFromfetch = JSON.parse(await getInfoPanelDataForEachLeftPanelButton());
console.log('and the element is:', copyReturnFromfetch[typeOfElement]);
deleteElementsInsideDiv('infoPanel');
if (!editmodeOn) {
addTextToElement(textPlacementId, copyReturnFromfetch[typeOfElement]);
window.location.href = '#infoPanel';

        }
if (editmodeOn) {
    console.log('editmodeOn:  ', editmodeOn);
    createTextArea(textPlacementId, 'editAreaId');
    addTextToElement('editAreaId', copyReturnFromfetch[typeOfElement]);
    addButton(textPlacementId, 'Zapisz', 'saveEditButtonId');
    (<HTMLHtmlElement>document.getElementById('saveEditButtonId'))
    .addEventListener('click', () => {
        nameOfPartAndData.data =
            (<HTMLInputElement>document.getElementById('editAreaId')).value;
            console.log('sending ', nameOfPartAndData, ' to server');
            sendEditResultToJson(nameOfPartAndData);
        });
    }
    };
    // sendEditResultToJson();
    /* () => { console.log(
            nameOfPartAndData.nameOfPart = typeOfElement,
            nameOfPartAndData.data = (
                <HTMLInputElement>document.getElementById('editAreaId')).value); }, */