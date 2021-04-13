function init(){
    //add your javascrip between these two lines of code

    var info    = document.getElementsByClassName("center");
    const name  = info[1].textContent;
    //const email = info[2].textContent;

    var button  = document.getElementById("entrybutton");
    var input   = document.getElementById("entryinput");
    var output  = document.getElementById("textoutput");

    function buttonPress() {
        if (input.value == '') {
            alert("Empty Input");
        } else {
            alert(name + ": " + input.value);
            output.textContent = input.value;
        }
    }
    button.addEventListener('click', buttonPress);

}
    
window.addEventListener('load', init);