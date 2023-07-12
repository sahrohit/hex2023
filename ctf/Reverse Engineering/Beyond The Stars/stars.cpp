#include <iostream>
#include <string>

// Embarking on a journey through the infinite space, where the secrets are hidden among the stars

std::string useless = "cctf{YYr%uLmake_reddit_api_freeN}YY";

std::string alphabet = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                       "[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

std::string decode_secret(std::string secret)
{
  int roller = 47;
  roller = roller % 34;
  roller = roller * 3;
  roller = roller + 8;
  std::string decoded = "";

  // Decoding the message from beyond the stars
  for (char c : secret)
  {
    int elixir = alphabet.find(c);
    int original_elixir = (elixir + roller) % alphabet.length();
    decoded += alphabet[original_elixir];
  }

  return decoded;
}

// Function to find the largest of two numbers
double choose_greatest()
{
  double user_value_1, user_value_2, greatest_value;

  std::cout << "What's your first number? ";
  std::cin >> user_value_1;
  std::cout << "What's your second number? ";
  std::cin >> user_value_2;

  // Set greatest value to the first number as a starting point
  greatest_value = user_value_1;

  if (user_value_1 < user_value_2)
  {
    greatest_value = user_value_2;
  }

  std::cout << "The number with the largest positive magnitude is " << greatest_value << std::endl;

  return greatest_value;
}

int main()
{
  choose_greatest();
  return 0;
}