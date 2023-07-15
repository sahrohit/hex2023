# Reverse Me

Hexagon gave java a shot, and he made a simple program to authenticate users. Can you crack through it?

| Summary              |                                |
| -------------------- | ------------------------------ |
| **Category**         | Reverse Engineering            |
| **Points**           | 1500                           |
| **Links**            |                                |
| **Files**            | [JavaRev.java](./JavaRev.java) |
| **Difficulty (1-5)** | 2                              |
| **Tags**             |                                |

<details>
  <summary>Hint 1</summary>
  
Look how the input is being processed.

</details>

<details>
<summary>Solution</summary>
  
### Follow the process below.

The password at each character is checked in the checkPassword function, rewriting the password with the help of the function gives you the correct flag.

<details>
<summary>Disclose answer ?</summary>

```copy
CTF{un5cr@mbl3_th3_ch@r@ct3r5}
```

</details>

</details>
