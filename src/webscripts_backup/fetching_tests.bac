//alert('ddddd');
/*
(<HTMLButtonElement>document.getElementById("fetch-button")).addEventListener('click', () =>{   
    var fetchingTextPath = 
    (<HTMLInputElement>document.getElementById("sending-data")).value;
    zapisz(fetchingTextPath);
    });
*/
var zapisz = (tekst: string) => {
    console.log('wczytaje1111')
    fetch('/api', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {something: tekst}
                )}
        )
        .then(response => response.json())
        .then(data => {
            console.log('success:', data);
        })
        .catch(error => {
            console.error('errorek:', error);
        });
    }