function count_vowels(){

    const test_case = document.getElementById("word").value.toString();

    console.log(test_case);

    const vowels = ["a","e","i","o","u"];

    const letters = test_case.toLowerCase().split("");

    let vowels_count = 0;

    for(let i = 0; i < letters.length; i++){
        if(vowels.some(vowel => letters[i].includes(vowel))){
            vowels_count++;
        }
    }
    const answer = (vowels_count > 1) ? "In the word "+test_case.toString()+" there are "+vowels_count+" vowels." : "In the word "+test_case+" there is "+vowels_count+" vowel.";
    document.getElementById("result").innerHTML = answer;
}