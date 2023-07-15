# Fortress Breach

As the leader of your team, you embark on a mission to seize the enemy's concealed fortress. Stay vigilant for guards who possess swift reflexes, a commanding presence, and advanced stealth technology. They have Malbolge, a language that is difficult to understand, and they are not afraid to use it. You must find a way to infiltrate the fortress and retrieve the flag.

| Summary              |                                                                                                                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Category**         | Forensics                                                                                                                                                                                                |
| **Points**           | 2500                                                                                                                                                                                                     |
| **Links**            |                                                                                                                                                                                                          |
| **Files**            | [Can_you_find_me.txt](https://ctf.hexhimalaya.com/files/d267011bab62914002fd27472055603a/Can_you_find_me.txt?token=.eJyrViotTi2Kz0xRsjLWUSpJTcyFsdMyc1LBbEOTWgD0Cgwg.ZK7oKQ.jlGN_eNuh1eiLXxVu5EqEVgAdCg) |
| **Difficulty (1-5)** | 4                                                                                                                                                                                                        |
| **Tags**             |                                                                                                                                                                                                          |

<details>
  <summary>Hint 1</summary>

Try speaking the text through Malbolge.

</details>
<details>
  <summary>Hint 2</summary>

UFO has four hidden secrets.

</details>
<details>
  <summary>Hint 3</summary>

Parking for aliens is shifted one block away from the fortress.

</details>

<details>
<summary>Solution</summary>
  
### Follow the process below.
    
There is a txt file which on opening gives gibberish text ie. a malbolge encrypted text.
http://zb3.me/malbolge-tools/#generator
On decryption, we get a drive link where there is a new image awaiting us. This image has a
trap inside it ie. a bluff text (stealth)(completely senseless) that is intended to waste time. But on
moving across the bit plane (fighter plane) we can see QR codes on R-2.
https://stegonline.georgeom.net/embedimage
On decrypting the QRs we find another drive link with another image. Here the image has
another image (hidden) inside of it (image-image steganography) and we find the final flag on
decryption.
https://incoherency.co.uk/image-steganography/#unhide

First link: https://drive.google.com/drive/folders/1gOkKD88UlEnx_OxOh-NDDEGwTP8Wkszb?usp=sharing

Second link: https://drive.google.com/drive/folders/1RQuIXsnEGInopKRAQ4tUP-3Sho35RgOn

<details>
<summary>Disclose answer ?</summary>

```copy
CTF{FlAG_47re55_8reaCHED}
```

</details>

</details>
