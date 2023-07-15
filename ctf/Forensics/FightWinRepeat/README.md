# Fight, Win, Repeat

Hexagon is heading towards one of the important checkpoints of Pheins to capture it. Find the flag
and be careful not to let Ultron do something shady. Be aware that a blowfish army guards the
checkpoint.

| Summary              |                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------- |
| **Category**         | Forensics                                                                                         |
| **Points**           | 3000                                                                                              |
| **Links**            |                                                                                                   |
| **Files**            | [zipped248.zip](https://ctf.hexhimalaya.com/files/6fef3539e072f9ac32dfa5cc912a9045/Zipped248.zip) |
| **Difficulty (1-5)** | 5                                                                                                 |
| **Tags**             |                                                                                                   |

<details>
  <summary>Hint 1</summary>

The files are not what they look like.

</details>

<details>
<summary>Solution</summary>
  
### Follow the process below.
    
Here, we get a zipped file named zipped249.zip which on opening we get another zipped file
with the name zipped248 and so on. Therefore, there are files zipped 249 times. Let’s try to
unzip them using some program as it would be tedious to do it manually.

```py code
from zipfile import ZipFile
zipObj = ZipFile('Zipped0.zip', 'w')
zipObj.write('/content/flag.txt')
for i in range(1,249):
  zipObj = ZipFile('Zipped'+str(i)+'.zip', 'w')
  zipObj.write('Zipped'+str(i-1)+'.zip')
  zipObj.close()
```

Now we get a .wav file in the final unzip. On inspecting the .wav file with any sound steganography tool like DeepSound we find two .ppt files. The catch here is that only one of the files has the original flag hidden in it and the other file is just a diversion. A .ppt can be easily converted to a .zip file and the contents hidden in it can be viewed accordingly. https://support.microsoft.com/en-us/office/extract-files-or-objects-from-a-powerpoint-file-85511e6f-9e76-41ad-8424-eab8a5bbc517

First, change the extension from .ppt to .zip then view the zipped folder. You will find a hidden file in ppt>slidemasters>.hidden. The wrong file just has a rot 13 encryption with the message “YOU ARE AT THE WRONG PLACE”. On opening the correct file you can find a blowfish encryption and a text message pointing to the password of the blowfish encryption ie.HEX.
http://blowfish.online-domain-tools.com/

On decryption, we can find the flag.

<details>
<summary>Disclose answer ?</summary>

```copy
CTF{70u_f0und_m3}
```

</details>

</details>
