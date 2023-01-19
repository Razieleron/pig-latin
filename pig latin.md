Describe: pigLatin();

Test:"It will add 'way' to the end of words that begin with a vowel."
Code:pigLatin("a");
Expected Output: "away"

Test:"It will add 'consonant'-ay to the end of consonants."
Code:pigLatin("b");
Expected Output: "bay"

Test: "It will only apply 'ay' to the first letter in a word."
Code: pigLatin("ba");
Expected Output: "baya"

Test: "It will correctly understand how to conjugate words that start with 'qu'."
Code: pigLatin("quilt")
Expected Output: "iltquay"

Test:"It will move the first character with 'ay' appended to the end of the string."
Code:pigLatin("ba");
Expected Output: "abay"

Test: "It will apply the 'ay' appending and consonant/vowel moving to the end of multiple words in a string"
Code: pigLatin("me too");
Expected Output: "emay ootay"

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output: