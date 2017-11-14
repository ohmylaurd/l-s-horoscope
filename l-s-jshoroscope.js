var message;
var sign;
var comp;

function trueSign(){
    //set up vars
    var name = document.getElementById("Name").value;
    var month= parseInt( document.getElementById("Month").value);
    var day= parseInt(document.getElementById("Day").value);
    var year=parseInt(document.getElementById("Year").value);

    //call out to functions
    determineSign(name,month,day);
    comp = determineCompatibility(sign);

    //write to page
    document.getElementById("output").innerHTML=message;
    document.getElementById("output2").innerHTML=determineCompatibility(sign);
    document.getElementById("output3").innerHTML=yourZodiac(year);
}


function determineDays(month){
    month=parseInt(month);
    document.getElementById("Day").innerHTML = "";
    var i;
    if (month===2){
        for(i=1; i<=28; i++){
            document.getElementById("Day").innerHTML+= "<option value='" + i + "'>" +i + "</option>";

        }
    }
    if(month===4|| month===6 || month===9 || month===11){
        for(i=1; i<=30; i++){
            document.getElementById("Day").innerHTML += "<option value='" + i + "'>" +i + "</option>";

        }
    }
    if(month===1||month===3||month===5||month===7||month===8||month===10||month===12){
        for(i=1; i<=31; i++){
            document.getElementById("Day").innerHTML += "<option value='" + i + "'>" +i + "</option>";

        }
    }
}


function determineSign(name,month, day) {
    if(month===12 && day>=22 || month===1 && day<=19){
        message = name + ", you are a capricorn! You like family, music, and tradition but dislike almost everything at some point.";
        sign = "capricorn";
    }
    if(month===1 && day>=20 || month===2 && day<=18){
        message = name + ", you are an aquarius! You like having fun with friends, fighting for causes, and are a good listener but dislike broken promises and being lonely";
        sign = "aquarius";
    }

    if(month===2 && day>=19 || month===3 && day<=20){
        message = name + ", you are a pisces! You like sleeping, romance, and music but dislike criticism and cruelty of any kind";
        sign = "pisces";
    }
    if(month===3 && day>=21 || month===4 && day<=19){
       message = name + ", you are an aries! You like being a leader, individual sports, and physical challenges but dislike work that doesn't show your strength and inactivity";
       sign = "aries";
    }
    if(month===4 && day>=20 || month===5 && day<=20){
       message = name + ", you are a taurus! You like getting your hands dirty, gardening, and cooking but dislike complications and insecurities";
       sign = "taurus";
    }
    if(month===5 && day>=21 || month===6 && day<=20){
        message = name + ", you are a gemini! You like books, communicating with others, and trips but dislike being alone and routines ";
        sign = "gemini";
    }
    if(month===6 && day>=21 || month===7 && day<=22){
       message = name + ", you are a cancer! You like art, water, and eating with friends but dislike strangers and revealing your personal life ";
       sign = "cancer";
    }
    if(month===7 && day>=23 || month=== 8 && day<=22){
        message  = name + ", you are a leo! You like theater, expensive things, and fun with friends but dislike not being treated like royalty and being ignored";
        sign = "leo";
    }
    if(month===8 && day>= 23 || month===9 && day<=22){
        message = name + ", you are a virgo! You like animals, healthy food, and nature but dislike rudeness and being the center of attention";
        sign = "virgo";
    }
    if(month===9 && day>=23 || month===10 && day<=22){
        message = name + ", you are a libra! You like sharing, harmony, and the outdoors but dislike violence and injustice";
        sign = "libra";
    }
    if(month===10 && day>=23|| month===11 && day<=21){
        message = name + ", you are a scorpio! You like being right, longtime friends, and facts but dislike revealing secrets and dishonesty";
        sign = "scorpio";
    }
    if(month===11 && day>=22 || month===12 && day<=21){
       message = name +", you are a sagittarius! You like travel, freedom, and being outdoors but dislike clingy people and theories";
       sign = "sagittarius";
    }
    console.log(sign);
    determineImg();

}

function determineImg(){
    console.log(sign);
    document.getElementById("image").innerHTML = "<img src='img/" + sign + ".png'>";
}


function determineCompatibility(sign){
    var comp;
    if(sign==="aquarius"){
        comp= " You are best compatible with Leo and Sagittarius"
    }
    if(sign==="pisces"){
        comp= " You are best compatible with Virgo and Taurus"
    }
    if(sign==="aries"){
        comp= " You are best compatible with Libra and Leo"
    }
    if(sign==="taurus"){
        comp= " You are best compatible with Scorpio and Cancer"
    }
    if(sign==="gemini"){
        comp= " You are best compatible with Sagittarius and Aquarius"
    }
    if(sign==="cancer"){
        comp= " You are best compatible with Capricorn and Taurus"
    }
    if(sign==="leo"){
        comp= " You are best compatible with Aquarius and Gemini"
    }
    if(sign==="virgo"){
        comp= " You are best compatible with Pisces and Cancer"
    }
    if(sign==="libra"){
        comp= " You are best compatible with Aries and Sagittarius"
    }
    if(sign==="scorpio"){
        comp= " You are best compatible with Taurus and Cancer"
    }
    if(sign==="sagittarius"){
        comp= " You are best compatible with Gemini and Aries"
    }
    if(sign==="capricorn"){
        comp= " You are best compatible with Taurus and Cancer"
    }
    return comp;
}
function yourZodiac(year){
    if(year%12===1){
        return "CaCadoodledoo you're a ROOSTER according to Chinese zodiac!!"
    }
    if(year%12===2){
        return "Woof Woof you're a DOG according to Chinese zodiac!!"
    }
    if(year%12===3){
        return "Oink Oink you're a PIG according to Chinese zodiac!!"
    }
    if(year%12===4){
        return "Squeaaakkkk you're a RAT according to Chinese zodiac!!"
    }
    if(year%12===5){
        return "Eerrrrrrrr you're an OX according to Chinese zodiac!!"
    }
    if(year%12===6){
        return "Grrrr you're a TIGER according to Chinese zodiac!!"
    }
    if(year%12===7){
        return "Hop hop you're a RABBIT according to Chinese zodiac!!"
    }
    if(year%12===8){
        return "Roar fire roar you're a DRAGON according to Chinese zodiac!!"
    }
    if(year%12===9){
        return "Sssssss you're a SNAKE according to Chinese zodiac!!"
    }
    if(year%12===10){
        return "Nayyyyy you're a HORSE according to Chinese zodiac!!"
    }
    if(year%12===11){
        return "Baaaaa you're a GOAT according to Chinese zodiac!!"
    }
    if(year%12===0){
        return "Ooo Ooo Ooo you're a MONKEY according to Chinese zodiac!!"
    }
    else{
        return "Please enter a year for your chinese zodiac!";
    }
}