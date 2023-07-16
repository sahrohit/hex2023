# Bomb

Fight, Check, Repeat

| Summary              |                                    |
| -------------------- | ---------------------------------- |
| **Category**         | Forensics                          |
| **Points**           | 1500                               |
| **Links**            | [Zipped2048.zip](./Zipped2048.zip) |
| **Files**            |                                    |
| **Difficulty (1-5)** | 2                                  |
| **Tags**             |                                    |

<details>
  <summary>Hint 1</summary>

Use a program to automate the unzipping process.

</details>

<details>
<summary>Solution</summary>
  
### Use a scripting langauge to automate the unzipping process.
    
```py copy
from zipfile import ZipFile

zipObj = ZipFile('Zipped2048.zip', 'w')
for i in range(0,2047):
zipObj = ZipFile('Zipped'+str(2048-i)+'.zip', 'w')
zipObj.extractall()
zipObj.close()

zipObj.close()

````

### Code to Generate the Zip Files:

```py copy
from zipfile import ZipFile

zipObj = ZipFile('Zipped0.zip', 'w')
zipObj.write('nicetry.txt')
for i in range(1,2049):
    zipObj = ZipFile('Zipped'+str(i)+'.zip', 'w')
    zipObj.write('Zipped'+str(i-1)+'.zip')
    zipObj.close()
````

<details>
<summary>Disclose answer ?</summary>

```copy
CTF{It_W@S_S0_E@SY}
```

</details>

</details>
