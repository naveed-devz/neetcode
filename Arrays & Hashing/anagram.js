// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.


const s = "racecar"
const t= "carrace"


function isAnagram(s, t) {
    let s1 = s.split("").sort().join("");
    let t1 = t.split("").sort().join("")
    return s1 === t1
}
console.group(isAnagram(s,t))