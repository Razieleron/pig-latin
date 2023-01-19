Describe: pigLatin();

<!-- Test:"It will add 'way' to the end of words that begin with a vowel."
Code:pigLatin("a", "apple");
Expected Output: "away" "appleway"

Test:"It will add 'consonant'-ay to the end of consonants."
Code:pigLatin("b");
Expected Output: "bay" -->

Test: "It will only apply 'ay' to the first letter in a word."
Code: pigLatin("bat");
Expected Output: "bayat"

Test: "For words that start with 'Qu', it will add 'ay' after the 'u' and not the 'q'."
Code: pigLatin("quilt")
Expected Output: "quayilt" 

Test:"It will move the first character(or two characters 'qu') with 'ay' appended to the end of the string."
Code:pigLatin("bat");
Expected Output: "atbay"

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