# Astro World

You have been entrusted with the task of extracting key information from a file named "STARS" that was discovered on an enemy base in sector 19. The base commander, who is now captured, had hidden important information within this file. Your team has been unable to retrieve the information so far, and now it's your responsibility to decipher it.

| Summary              |                          |
| -------------------- | ------------------------ |
| **Category**         | Reverse Engineering      |
| **Points**           | 1500                     |
| **Links**            |                          |
| **Files**            | [Stars.cpp](./stars.cpp) |
| **Difficulty (1-5)** | 2                        |
| **Tags**             |                          |

<details>
  <summary>Hint 1</summary>

Do you know about a dogbreed called "Rotweiler"?

</details>

<details>
  <summary>Hint 2</summary>

Rotweiler has 47 teeth.

</details>

<details>
<summary>Solution</summary>
  
### Follow the process below.
    
The Cipher is ROT- 47. I’ve just tried to play with maths
The string ‘useless’ stores the encrypted version of the Flag
You just have to pass that string through the “decode_secret” function.
The function “choose_greatest” is just a distraction.
    
```cpp
int main()
{
  choose_greatest();
  std::cout << decode_secret(useless) << std::endl;
  return 0;
}
```
<details>
<summary>Disclose answer ?</summary>

```copy
CTF{>2<60C655:E02A:07C66}
```

</details>

</details>
