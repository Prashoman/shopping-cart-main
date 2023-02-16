
///case plus btn click handeler
document.getElementById('case-plus-btn').addEventListener('click', function(){
   const caseFieldsCurrentValue = setCaseFieldsValue(true, 'case-flied');
   const caseTotalValue = setMultiplationCase(caseFieldsCurrentValue);

   setMainAllValue(caseTotalValue,'total-element');
   setSubtationValue()
})

///case mainus btn click handeler
document.getElementById('case-minus-btn').addEventListener('click', function(){
const caseFieldsCurrentValue = setCaseFieldsValue(false, 'case-flied');
   const caseTotalValue = setMultiplationCase(caseFieldsCurrentValue);
   setMainAllValue(caseTotalValue,'total-element');
   setSubtationValue()
})



///click handeler phone plus btn.
document.getElementById('phone-plus-btn').addEventListener('click', function(){
    const caseFieldsCurrentValue = setCaseFieldsValue(true, 'phone-fields');
    const phoneTotalValue = setMultipulationPhoneElement(caseFieldsCurrentValue);
    setMainAllValue(phoneTotalValue,'phone-element')
    setSubtationValue()
})

///click handeler phone minus btn.
document.getElementById('phone-minus-btn').addEventListener('click', function(){
    const caseFieldsCurrentValue = setCaseFieldsValue(false, 'phone-fields');
    const phoneTotalValue = setMultipulationPhoneElement(caseFieldsCurrentValue);
    setMainAllValue(phoneTotalValue, 'phone-element')
    setSubtationValue()

})






function setMainAllValue(mainValueMultipilate , elementId){
  const allElement =  document.getElementById(elementId);
  allElement.innerText = mainValueMultipilate;
}

///multipulation case_section;
function setMultiplationCase(caseValueCurrent){
  const caseTotal  = caseValueCurrent * 59;
  return caseTotal;
}

///multipulation phone_section
function  setMultipulationPhoneElement(phoneValueCurrent){
    const phoneTotal  = phoneValueCurrent * 1219;
  return phoneTotal;
}

