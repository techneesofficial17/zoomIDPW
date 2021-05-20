

const pop = document.querySelector(".popup");
const accept = document.getElementById("accept");
const deny = document.getElementById("deny");
const cross = document.getElementById("cross");
const body = document.getElementsByTagName("body");
const helptext = document.getElementById("helptext");


function showpopup() {
    pop.style.display = "block";
    pop.style.animation = "popin 0.2s ease-in";
    $('html body').css('overflow','hidden');
}
function endpopup() {

    helptext.style.display = "block";

        
    cross.addEventListener('mouseout', () => {
        helptext.style.display = "block";
    });

    

    function timeinterval() {
        let time = 6;
        let spannum = document.getElementById("num");

        setInterval(() => {
       
           time -= 1;
           spannum.innerHTML = time;
        }, 1000);
    }

    timeinterval();

    function timewell(){ 
    
    pop.style.display = "none";

    $('html body').css('overflow','visible');
    }
    setTimeout(timewell,6000);
}

cross.addEventListener('click', endpopup);

cross.addEventListener('mouseover', () => {
    let spannum = document.getElementById("num");
    helptext.style.display = "block";
    
});

cross.addEventListener('mouseout', () => {
    helptext.style.display = "none";
});

setTimeout(showpopup, onload);

accept.addEventListener('click' , () => {
    pop.style.display = "none";

    $('html body').css('overflow','visible');
    
});

deny.addEventListener('click', () => {
    
        location.reload();
    
});

function dycopy() {
        
    const dytext = document.getElementById("dypw");
    const dybtn = document.getElementById("dybtn");

    dytext.select();
    document.execCommand('Copy');
};


function ascopy() {
        
    const astext = document.getElementById("aspw");
    const asbtn = document.getElementById("asbtn");

    astext.select();
    document.execCommand('Copy');
};



function dpcopy() {
        
    const dptext = document.getElementById("dppw");
    const dpbtn = document.getElementById("dpbtn");

    dptext.select();
    document.execCommand('Copy');
};




function jmcopy() {
        
    const jmtext = document.getElementById("jmpw");
    const jmbtn = document.getElementById("jmbtn");

    jmtext.select();
    document.execCommand('Copy');
};




function uccopy() {
        
    const uctext = document.getElementById("ucpw");
    const ucbtn = document.getElementById("ucbtn");

    uctext.select();
    document.execCommand('Copy');
};


function pbtcopy() {
        
    const pbttext = document.getElementById("pbtpw");
    const pbtbtn = document.getElementById("pbtbtn");

    pbttext.select();
    document.execCommand('Copy');
};



function bbpcopy() {
        
    const bbptext = document.getElementById("bbppw");
    const bbpbtn = document.getElementById("bbpbtn");

    bbptext.select();
    document.execCommand('Copy');
};


function mkpcopy() {
        
    const mkptext = document.getElementById("mkppw");
    const mkpbtn = document.getElementById("mkpbtn");

    mkptext.select();
    document.execCommand('Copy');
};


function aScopy() {
        
    const aStext = document.getElementById("aSpw");
    const aSbtn = document.getElementById("aSbtn");

    aStext.select();
    document.execCommand('Copy');
    console.log("this is clicked");
};


                                  

function spcopy() {
        
    const sptext = document.getElementById("sppw");
    const spbtn = document.getElementById("spbtn");

    sptext.select();
    document.execCommand('Copy');
};


function mkpcopy() {
        
    const mkptext = document.getElementById("mkppw");
    const mkpbtn = document.getElementById("mkpbtn");

    mkptext.select();
    document.execCommand('Copy');
};



function rgcopy() {
        
    const rgtext = document.getElementById("rgpw");
    const rgbtn = document.getElementById("rgbtn");

    rgtext.select();
    document.execCommand('Copy');
};


                                  



function btcopy() {
        
    const bttext = document.getElementById("btpw");
    const btbtn = document.getElementById("btbtn");

    bttext.select();
    document.execCommand('Copy');
};


                                  


function ajcopy() {
        
    const ajtext = document.getElementById("ajpw");
    const ajbtn = document.getElementById("ajbtn");

    ajtext.select();
    document.execCommand('Copy');
};


                                  


function snscopy() {
        
    const snstext = document.getElementById("snspw");
    const snsbtn = document.getElementById("snsbtn");

    snstext.select();
    document.execCommand('Copy');
};



function prjcopy() {
        
    const prjtext = document.getElementById("prjpw");
    const prjbtn = document.getElementById("prjbtn");

    prjtext.select();
    document.execCommand('Copy');
};


                                  


function dacopy() {
        
    const datext = document.getElementById("dapw");
    const dabtn = document.getElementById("dabtn");

    datext.select();
    document.execCommand('Copy');
};


                                  


function tcopy() {
        
    const ttext = document.getElementById("tpw");
    const tbtn = document.getElementById("tbtn");

    ttext.select();
    document.execCommand('Copy');
};


                                  