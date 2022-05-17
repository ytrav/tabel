// info header

var info1 = document.getElementById("info1"),
    info2 = document.getElementById("info2"),
    info3 = document.getElementById("info3"),
    info4 = document.getElementById("info4"),
    info5 = document.getElementById("info5"),
    info6 = document.getElementById("info6"),
    info7 = document.getElementById("info7"),
    info8 = document.getElementById("info8"),
    info9 = document.getElementById("info9"),
    info10 = document.getElementById("info10"),
    info11 = document.getElementById("info11"),
    info12 = document.getElementById("info12");


function test(info, value) {
    info.innerHTML = value;
    return;
}


// XML String and the parser declared
// later could be replaced with an XHTTP request or something, to parse a local file

var parser, xmlDoc;
var text = "<info><patient><name>Mediconnect</name><surname>Teststationär</surname><age>22</age><birthday>01.01.2000</birthday></patient><aufnahmestatus>Aufnahmestatus vom 28.03.2022</aufnahmestatus><telnrangehoerige>—</telnrangehoerige><entlassdatum>01.02.2022</entlassdatum><aufnahmediagnose>—</aufnahmediagnose><betreuung>Vorhanden/bearbeiten</betreuung><patnr>4100018028</patnr><fallnr>0049026127</fallnr><letzte2arztbriefe>Arztbrief vom 18.05.2021 (KAR)\nArztbrief vom 23.06.2020 (KAR)</letzte2arztbriefe><allergien>—</allergien><naechstetermine>—</naechstetermine><empfohleneentlassart>EV ext.Verleg.</empfohleneentlassart></info>"

// Parser parsing
parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

// filling in the head table

//name and surname
info1.innerHTML = xmlDoc.getElementsByTagName("surname")[0].childNodes[0].nodeValue + ", " + xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue + " (" + xmlDoc.getElementsByTagName("age")[0].childNodes[0].nodeValue + ")  * " + xmlDoc.getElementsByTagName("birthday")[0].childNodes[0].nodeValue;

// Aufnahmestatus
info2.innerHTML = xmlDoc.getElementsByTagName("aufnahmestatus")[0].childNodes[0].nodeValue;

// Tel.Nr Angehoerige
info3.innerHTML = xmlDoc.getElementsByTagName("telnrangehoerige")[0].childNodes[0].nodeValue;

// Entlassdatum
info4.innerHTML = xmlDoc.getElementsByTagName("entlassdatum")[0].childNodes[0].nodeValue;

// Aufnahmediagnose
info5.innerHTML = xmlDoc.getElementsByTagName("aufnahmediagnose")[0].childNodes[0].nodeValue;

// Betreuung/Vorsorgevollmacht vorhanden
info6.innerHTML = xmlDoc.getElementsByTagName("betreuung")[0].childNodes[0].nodeValue;

// Pat-Nr.
info7.innerHTML = xmlDoc.getElementsByTagName("patnr")[0].childNodes[0].nodeValue;

// Fall-Nr.
info8.innerHTML = xmlDoc.getElementsByTagName("fallnr")[0].childNodes[0].nodeValue;

// Letzte 2 Arztbriefe
info9.innerHTML = xmlDoc.getElementsByTagName("letzte2arztbriefe")[0].childNodes[0].nodeValue;

// Allergien
info10.innerHTML = xmlDoc.getElementsByTagName("allergien")[0].childNodes[0].nodeValue;

// Naechste Termine
info11.innerHTML = xmlDoc.getElementsByTagName("naechstetermine")[0].childNodes[0].nodeValue;

// Empfohlene Entlassart
info12.innerHTML = xmlDoc.getElementsByTagName("empfohleneentlassart")[0].childNodes[0].nodeValue;