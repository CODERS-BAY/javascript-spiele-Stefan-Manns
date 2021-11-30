function createPopup(errorText, reload = false) {

    let popup = document.createElement('div');
    popup.setAttribute('id', 'popup') //Attribut nachträglich zuweisen 

    let headline = document.createElement('h3');
    headline.append(errorText);

    let button = document.createElement('button');
    if(reload) {
        button.append('Nochmal spielen');
        button.addEventListener('click', function() {
            location.reload();

        });
    }else {
        
        button.append('OK');
        button.addEventListener('click', function() {
        document.getElementById('popup').remove();
        let popback = document.getElementsByClassName('HaDi')[0];
        popback.classList.add('active');
    })
}

    popup.append(headline);
    popup.append(button);
    document.body.append(popup);
}