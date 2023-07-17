# Macro Shot

Does the ancient Word document discovered on one of the Hexagon computers contain any valuable information for us?

| Summary              |                                               |
| -------------------- | --------------------------------------------- |
| **Category**         | Reverse Engineering                           |
| **Points**           | 2000                                          |
| **Links**            | [where_is_the_flag](./where-is-the-flag.docm) |
| **Files**            |                                               |
| **Difficulty (1-5)** | 3                                             |
| **Tags**             |                                               |

<details>
  <summary>Hint 1</summary>

Macros give you surprises in word.

</details>
<details>
  <summary>Hint 2</summary>

Resource abundance

</details>

<details>
  <summary>Solution</summary>
1. After opening the word document, you would see a long number 67084070012301190104012109501000490100095049095048011205101100950116010404901150950109052099011404809508408708401250
2. Using the description and hints, you guess the flag is probably hidden in macro. Open the macro, you would see the obfuscated vbscript.
3. After some renaming, you would find out some variables declared are never used. Getting rid of those first.4
4. Cleaning up a bit, you would see only vusirht and iruthvb are used.5
5. Knowing vusirht, you can speculate that iruthvb is acted as an index. Searching on Google tells you that Asc() turns an ascii character to an integer.6
6. Putting all the information together, you would notice, this program takes an array of characters, turn them into ascii value, multiply by 10 and concatenate them together. Using your knowledge about ascii, you know the flag is between ascii value 32 and 127. 
7. Now take the long number in the word document and seperate then from range 32 to 127.
8. With some patience, separate the number and then convert them to ascii characters, you will get the flag.

<details>
  <summary>Disclose answer ?</summary>

```copy
CTF{why_d1d_1_0p3n_th1s_m4cr0_TWT}
```

</details>

</details>
