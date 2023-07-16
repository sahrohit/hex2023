# Scrambled Eggs

You have been assigned to infiltrate an enemy base where a secret agent is currently hiding. The agent has informed you that accessing the server requires a password, but he doesn't know what the password is. However, he has sent you a file containing information about a code. Your task is to assist your team by deciphering the password from the code provided and executing it correctly.

| Summary              |                              |
| -------------------- | ---------------------------- |
| **Category**         | Reverse Engineering          |
| **Points**           | 1000                         |
| **Links**            |                              |
| **Files**            | [Warfare.cpp](./Warfare.cpp) |
| **Difficulty (1-5)** | 1                            |
| **Tags**             |                              |

<details>
  <summary>Hint 1</summary>

Try shuffuling the functions around.

</details>

<details>
  <summary>Hint 2</summary>

One is only needed to get the job done.

</details>

<details>
<summary>Solution</summary>
  
### Follow the process below.
    
The garbler function is for XOR Cipher and the raveler function is for Caesar cipher.
There is an unused variable “message” which stores some character and it has been passed
through a number of function and stored in the variable “somethin”
You just have to change the combination of the functions through which it has been passed.
I.e “string somethin = garbler(message)” and print it.
<details>
<summary>Disclose answer ?</summary>

```copy
CTF{W3|c0me_70_Th3_W@RF@re}
```

</details>

</details>
