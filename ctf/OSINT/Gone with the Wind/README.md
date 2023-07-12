# Gone with the Wind

You have received a secret message from a squadron of the rebel alliance on Pheins:

T25lIG9mIG91ciBjcnVjaWFsIGxvY2FsIHRyYW5zcG9ydGF0aW9uIHZlaGljbGUgd2FzIH
N0b2xlbiEgSGVscCB1cyBmaW5kIHRoZSBjdXJyZW50IG93bmVyL293bmVycyBvZiB0a
GUgaGVsaWNvcHRlciB0byBnZXQgdG8gdGhlIHRoZWlmLgooSWYgdGhlcmUgYXJlIH
R3byBvd25lcnMgdGhlbiBjb21iaW5lIHRoZWlyIG5hbWVzIHRvIGdldCB0aGUgZmxhZwo
gRWcuIGZvciBSaXlhIE1hbm9qIGFuZCBTdGFuIFBoaWxpcCB0aGUgZmxhZyBpcyBSa
XlhX1N0YW4pCg==

| Summary              |                                                                                                                                                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Category**         | OSINT                                                                                                                                                                                                                  |
| **Points**           | 2000                                                                                                                                                                                                                   |
| **Links**            |                                                                                                                                                                                                                        |
| **Files**            | [HelicopterrHelicopterr.png](https://ctf.hexhimalaya.com/files/c490bafc265e167c893374b1593c7bfc/HelicopterrHelicopterr.png?token=.eJyrViotTi2Kz0xRsjLWUSpJTcyFsdMyc1LBbEOzWgD0Dgwi.ZK7x3g.PwVgZ4w91aMMuVC1tECSg9do2Y8) |
| **Difficulty (1-5)** | 3                                                                                                                                                                                                                      |
| **Tags**             |                                                                                                                                                                                                                        |

<details>
  <summary>Hint 1</summary>

Tail number is the registration number of an aircraft.

</details>

<details>
  <summary>Hint 2</summary>

Search up for the company owning the aircraft.

</details>

<details>
  <summary>Hint 3</summary>

Search up company registered in Alaska.

</details>
<details>
<summary>Solution</summary>
  
### Follow the process below.
    
The secret message given to you is a simple Base64 encryption which you get the
original question on decoding. We can see that the stolen helicopter's tail number is
given in the image. We can find the helicopter by this. We can get details about the
owner on the flight aware website
https://flightaware.com/
We see that the helicopter is owned by “JET RANGER X LLC” but this is not the true
name of the owner, but is a company name. So we need to find some other information
as well. On going across the flight registration database we can see that the flight owner
stays in ANCHORAGE or has an office there.
http://www.aviationdb.com/
So maybe, the details of the owner entities will be registered in Anchorage, Alaska. So
let's go through the Alaska Business entity search website
https://www.commerce.alaska.gov/cbp/main/search/entities
And Bingo! We can see the owners of the flight as “JOHN P. ODOM” and “REGAN SHERICK-ODOM”
Combining the names we get the flag
<details>
<summary>Disclose answer ?</summary>
```copy
CTF{JOHN_REGAN}
```

</details>

</details>
