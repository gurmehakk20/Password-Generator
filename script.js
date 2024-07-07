let target1 = document.querySelector("#first");
let target2 = document.querySelector("#second");
let message1 = "Generate a";
let message2 = "Random Password";
let input = document.querySelector("input");
let generate = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");

var showText = function (target, message, index, interval, callback) {   
    if (index < message.length) {
        target.textContent += message[index++];
        setTimeout(function () { showText(target, message, index, interval, callback); }, interval);
    } else {
        callback(); 
    }
}

showText(target1, message1, 0, 100, function () {
    showText(target2, message2, 0, 100, function () {
        console.log("Text animation complete!");
    });
});

input.disabled = true;
let len = 16;
let generatedString = "";

let options = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz","0123456789","@#$%!&?/|`<>;:"];
let generateFunction = (str) => {
    let len = str.length;
    let idx = Math.floor(Math.random()*len);
    // console.log(idx);
    return str[idx];
}
// generateFunction(upperCase);

generate.addEventListener("click", async () => {
    let generatedString = "";
    for (let i = 0; i < len; i++)
    {
        let idx = Math.floor(Math.random()*4);
        generatedString += generateFunction(options[idx]);
    }
    console.log(generatedString);
    input.value = generatedString;
});

// let copyPassword = () => {
//     input.select();
//     document.execCommand("copy");
// }
// copyBtn.addEventListener("click", () => {
//     copyPassword();
// })

let copyPassword = () => {
    // Use Clipboard API to copy text
    navigator.clipboard.writeText(input.value)
        .then(() => {
            console.log("Password copied to clipboard!");
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy password: ", err);
        });
}

copyBtn.addEventListener("click", () => {
    copyPassword();
});
