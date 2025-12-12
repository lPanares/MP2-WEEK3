let txtInput = document.querySelector('#txtInput');
let btnSearchWord = document.querySelector('#btnSearchWord');
let txtOutput = document.querySelector('#txtOutput');

btnSearchWord.addEventListener('click', function(){
    let fullInput = txtInput.value.trim();
    
    if (!fullInput) {
        txtOutput.textContent = "Not Found";
        return;
    }

    let parts = fullInput.split(' ');
    if (parts.length < 2) {
        txtOutput.textContent = "Not Found";
        return;
    }

    let word = parts[parts.length - 1];
    let sentence = parts.slice(0, -1).join(' ');

    txtOutput.textContent = sentence.includes(word) ? "Found" : "Not Found";
});
