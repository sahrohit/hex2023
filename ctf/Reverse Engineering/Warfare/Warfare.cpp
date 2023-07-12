

#include <iostream>
#include <cstring>
using namespace std;

const int KEY = 13;

class Person
{
public:
    string name;
    int age;
    string address;
    string phone;

    // constructor
    Person(string name, int age, string address, string phone)
    {
        this->name = name;
        this->age = age;
        this->address = address;
        this->phone = phone;
    }

    // method to get details of a person
    void getDetails()
    {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Address: " << address << endl;
        cout << "Phone: " << phone << endl;
    }
};

// COULD YOU MAKE AN AS OF WHAT THIS FUNCTION IS DOING??
string garbler(string message)
{
    string result = "";
    for (int i = 0; i < message.length(); i++)
    {
        result += (char)(message[i] ^ KEY);
    }
    return result;
}

// WHAT IS THE USE OF THIS FUNCTION??
string raveler(string message)
{
    for (int i = 0; i < message.length(); i++)
    {
        if (isalpha(message[i + 1]))
        {
            message[i] = message[i + 1] - KEY;
            if (!isalpha(message[i]))
            {
                message[i] -= 16;
            }
        }
    }
    return message;
}

int main()
{
    string name, address, phone;
    int age;

    // input details of a person
    cout << "Identify yourself: ";
    getline(cin, name);
    cout << "Enter the distance you travelled: ";
    cin >> age;
    cin.ignore();
    cout << "Enter planet you are coming from: ";
    getline(cin, address);
    string message = "NYKvZ>qn=`hR:=RYe>RZM_KMhp";
    string somethin = raveler(garbler(raveler(message)));
    cout << "Enter the secret passage code: ";
    getline(cin, phone);

    // create an instance of the Person class
    Person p1(name, age, address, phone);

    // call the getDetails method to print the details
    p1.getDetails();
    return 0;
}
