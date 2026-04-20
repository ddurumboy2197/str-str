function strStr(haystack, needle) {
    if (needle.length === 0) return 0;
    if (haystack.length < needle.length) return -1;

    let lps = new Array(needle.length).fill(0);
    let j = 0;
    for (let i = 1; i < needle.length; i++) {
        while (j > 0 && needle[i] !== needle[j]) j = lps[j - 1];
        if (needle[i] === needle[j]) j++;
        lps[i] = j;
    }

    j = 0;
    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) j = lps[j - 1];
        if (haystack[i] === needle[j]) j++;
        if (j === needle.length) return i - needle.length + 1;
    }

    return -1;
}
```

Kodni ishlatish uchun misol:
```javascript
console.log(strStr("hello", "ll"));  // 2
console.log(strStr("hello", "lll")); // -1
console.log(strStr("hello", "o"));   // 4
console.log(strStr("hello", ""));    // 0
console.log(strStr("", "hello"));    // -1
