# Radio Head

Your team has sent you an email with an audio file that they are unable to understand. They have forwarded the file to you because you possess expertise in analyzing audio files. Your task is to uncover any hidden message within the file and provide assistance to your team.

(Use underscores in place of spaces.)

Note: Write the flag as CTF{\<answer>} with spaces replaced by '\_'

| Summary              |                            |
| -------------------- | -------------------------- |
| **Category**         | Forensics                  |
| **Points**           | 2000                       |
| **Links**            |                            |
| **Files**            | [ph31ns.wav](./ph31ns.wav) |
| **Difficulty (1-5)** | 3                          |
| **Tags**             |                            |

<details>
  <summary>Hint 1</summary>

### Cost: 500

Unlike river, the audio doesn't always flow in one direction.

</details>

<details>
  <summary>Hint 2</summary>

### Cost: 500

Use your eyes instead of your ears.

</details>

<details>
  <summary>Hint 3</summary>

### Cost: 500

Frequency is not you friend, try asking spectrum maybe.

</details>

<details>
<summary>Solution</summary>
  
### Tool used : Audacity and Coagula

This is a basic question related to audio forensics. Reverse the wav and open it in audacity and check the
spectrogram. You will find the flag but a bit jumbled, Clearly analyze it to get the flag.

<details>
<summary>Disclose answer ?</summary>

```copy
CTF{Ph3i_f4mily_is_in_d4ng3r}
```

</details>

</details>
