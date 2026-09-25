function containsVowel(inputString) {
    let vowels = "aeiouAEIOU";



    for (let char of inputString) {
        if (vowels.includes(char)) {
            return "Vowel Found";
        }
    }

    return "No Vowel";
}
console.log(containsVowel("ABC"));
console.log(containsVowel("rhythm"));
