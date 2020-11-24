function changeText()
{
    // Sparar värdet som är inskrivet i textrutan i variabeln "value"
    var value = this.value;
     
    // Letar upp elementet med id "textbox" (Där texten ska ändra sig)
    var textBox = document.getElementById("textBox");
     
    // Ändrar texten i elementet som ligger i variabeln textBox till variabeln "value" värde
    textBox.childNodes[0].nodeValue = value;
}
 
 
function toggling()
{
    // Sparar det efterföljande nod-syskonet i variabeln "nextElement"
    var nextElement = next(this);
     
    if(nextElement.style.display == "none")
    {
        // Om det efterföljande elementet är dolt, så visar vi det
        nextElement.style.display = "block";    
    }
    else
    {
        // Om det efterföljande elementet är synligt, så döljer vi det
        nextElement.style.display = "none"; 
    }
}
 
function init()
{
    // Lägger på våra event-handlers
 
    var text = document.getElementById("text");
    text.onkeyup = changeText;
     
    var toggle = document.getElementById("toggle");
    toggle.onclick = toggling;
}
 
window.onload = init;
 
// Vår hjälpfunktion "next"
 
function next(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType != 1);
    return elem;                
}