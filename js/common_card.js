///common plus minus btn click
function setCaseFieldsValue(isCondition,caseElementId){
    const caseFileds =parseInt(document.getElementById(caseElementId).value) ;
    let caseValue ;
    if(isCondition === true){
        caseValue = caseFileds + 1 ;
    }else{
        caseValue = caseFileds - 1 ;
    }
     
    document.getElementById(caseElementId).value = caseValue
    return caseValue;
}

//total culculate value common alll


function setSubtationValue(){
    const caseCureentElement =  document.getElementById('total-element').innerText;
    const phoneCureentElement = document.getElementById('phone-element').innerText;

    const subTotal = parseInt(caseCureentElement)+ parseInt(phoneCureentElement);
    document.getElementById('sub-total').innerText = subTotal;

    const texTotal = setTexValue(subTotal);

    const finalTotal = subTotal + parseInt(texTotal);

    document.getElementById('final-total').innerText = finalTotal;
    console.log(finalTotal)
}

//persentise function 

function setTexValue(subtotal){

    const texTotal = ((subtotal * (10/100)).toFixed(2));
    document.getElementById('tex-total').innerText = texTotal;
    return texTotal;
}