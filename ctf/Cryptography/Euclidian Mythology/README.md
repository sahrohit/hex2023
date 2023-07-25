# Euclidian Mythology

Your commander has been captured by the enemies. Your team still has the ability to retrieve your commander out of the enemy base, but your team is in a very weak condition and it needs to be healed. However, during the war enemies had destroyed all your medical supplies. The commander, during the wars had mentioned of a locked safety vault in the base, which was used for keeping medical supplies, but there is a passcode to it and only the commander knows how to open it. Once you reach there, you observe that the following code was written on the safety lock. And on the opening side of the vault. There was written : “A witty little boy from GREEK named Euclid likes natural numbers and in those he is obsessed with numbers which divide (number-1)!+1, he refers to such a number as aphrodite numbers (as he is in love with those numbers). Moreover if an aphrodite number is sum of squares of two aphrodite numbers ,euclid calls such a number as Hermes number and uses such numbers for encrypting messages. He uses a Hermes number less than 729 for this purpose to shift the message.. He sends a message to his pal named Pythagoras ,as Pythagoras is obsessed with a square number which is sum of square of other two numbers ,so obviously he is unable to find hermes number , one of his a buddy named Aryabhatta ,currently reading this question, is going to help him out.” Break the code with the help of the writings on the wall and find the passcode.

The code is: `ahxlughihkncdgbl`

Hint :- Euclid denotes n! as the product of all natural numbers appearing before n, with n.

| Summary              |              |
| -------------------- | ------------ |
| **Category**         | Cryptography |
| **Points**           | 3000         |
| **Links**            |              |
| **Files**            |              |
| **Difficulty (1-5)** | 5            |
| **Tags**             |              |

<details>
  <summary>Hint 1</summary>
Aphrodite numbers are nothing but Prime numbers defined by wilson's theorem.
</details>

<details>
  <summary>Hint 2</summary>
Hermes numbers are prime numbers which are sum of square of other prime numbers which should be less than 729.
</details>

<details>
  <summary>Hint 3</summary>
We will also need help from ROT.
</details>

<details>
  <summary>Hint 4</summary>
Euclid is obsessed with prime indices.
</details>

<details>
<summary>Solution</summary>
  
### Follow the process below.

Mentioned aphrodite numbers are nothing but Prime numbers defined by wilson's theorem,
Hermes numbers are prime numbers which are sum of square of other prime numbers,so
basically there are Hermens numbers lesser than 729 which are 13,29,53,173,293.
<br/>13=2**2+3**2
<br/>29=2**2+5**2
<br/>53=2**2+7**2

(Observe that Hermens numbers can only be formed with help of 2)
So Euclid uses Hermens numbers for encrypting (shift cipher==ROT cipher) .I choose 29,
player has to go through these numbers for decrypting like ROT13,ROT29,ROT53 .then also he
has to choose alphabets appearing at prime index as Euclid is obsessed with prime numbers ,
Euclid likes natural number indexing starts from 1.Player chooses alphabets which are at index
2,3,5,7,11… manually and gets the flag after decrypting the message with ROT29==ROT3

<details>
<summary>Disclose answer ?</summary>

```copy
CTF{eureka}
```

</details>

</details>
