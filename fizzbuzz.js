function FizzBuzz(value1,value2) {
    let returnArray = [];
    for(let i=1; i<=100; i++) {
        returnArray[i] = ((i%value1==0 ? 'Fizz' : '') + (i%value2==0 ? 'Buzz' : '') || i);
    }
    return returnArray;
}
//Call and use our template
function buzzItTemplate() {
    let output = [];
    let headTemplate = document.getElementById("template-header");
    let rowTemplate = document.getElementById("template-row-items");
    let resultsHTML = headTemplate.innerHTML;
    let templateHTML = rowTemplate.innerHTML;
    //get the values the user entered
    let val1 = document.getElementById("Fizzvalue").value;
    let val2 = document.getElementById("Buzzvalue").value;
    //Call the fizzbuzz function
    output = FizzBuzz(val1,val2);
    for(i=1; i<output.length; i+=5) {
        resultsHTML += templateHTML.replace('{{val1}}', output[i])
                                .replace('{{val2}}',output[i+1])
                                .replace('{{val3}}',output[i+2])
                                .replace('{{val4}}',output[i+3])
                                .replace('{{val5}}',output[i+4]);
    }
    document.getElementById('results').innerHTML = resultsHTML;
}
function buzzItTemplateReset() {
    document.getElementById('Fizzvalue').value = 0;
    document.getElementById("Buzzvalue").value = 0;
    document.getElementById('results').innerHTML = "";
}