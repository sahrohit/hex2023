# Death Star

In order to infiltrate the heavily secured Pinnacle Tower, our team has devised a plan to create a diversion by disabling the main server. To achieve this, we need to obtain the correct password by analyzing and executing the code provided in the file named "PINNACLE" This mission bears a resemblance to an intriguing movie plot reminiscent of "Star Wars."

| Summary              |                              |
| -------------------- | ---------------------------- |
| **Category**         | Reverse Engineering          |
| **Points**           | 2000                         |
| **Links**            |                              |
| **Files**            | [PINNACLE.py](./PINNACLE.py) |
| **Difficulty (1-5)** | 3                            |
| **Tags**             |                              |

<details>
  <summary>Hint 1</summary>
  
  Focus on the shift.

</details>

<details>
  <summary>Hint 2</summary>

Julius Caeser in Star Wars???

</details>
<details>
  <summary>Hint 3</summary>

Try decrypting the message using the Cipher.

</details>

<details>
<summary>Solution</summary>
  
### Follow the process below.
    
The function is a modified version of Caesar Cipher. You’ve to create a decryption function
The hint for key is the start of CTF = 19

```python
def skywalker(saber, key):
    stormtrooper = ""
    for char in saber:
        if char. isalpha():
            shift = ord(key[0].upper()) - ord('A')
            char = chr((ord(char.upper()) - ord('A') - shift) % 26 + ord('A'))
        stormtrooper += char
        key = key[1:] + key[0]
    return stormtrooper

key = "19"
saber = "MLP{DZOXYJMWSKCLBGXYGADZIGE}"
stormtrooper = skywalker(saber, key)
print("Skywalkered message: " + stormtrooper)
```

<details>
<summary>Disclose answer ?</summary>

```copy
CTF{THEFORCEISSTRONGWITHYOU}
```

</details>

</details>
