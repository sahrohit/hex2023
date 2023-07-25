# We are recieving some sort of message but I am not sure what it is. 
# It goes something like MLP{DZOXYJMWSKCLBGXYGADZIGE}
# we recieved the information about the key, it has something to do with the starting date of the event.

def jedi(stormtrooper, key):
    """A secret message is sent through the Force using the Jedi cipher."""
    saber = ""
    for char in stormtrooper:
        if char.isalpha():
            # A Jedi's power is determined by the key value
            shift = ord(key[0].upper()) - ord('A')
            # The Force is strong with this one
            char = chr((ord(char.upper()) - ord('A') + shift) % 26 + ord('A'))
        saber += char
        # The key is constantly changing, like the Force
        key = key[1:] + key[0]
    return saber


stormtrooper = input("Enter a transmission to the Jedi : ")
key = (input("Enter the key for the Jedi transmission: "))

saber = jedi(stormtrooper, key)
print("Jedied message: " + saber)