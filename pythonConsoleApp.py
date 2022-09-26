
import botometer
screen_name = input("Enter Username")
rapidapi_key = "a080f949c1msh9b9af540754b151p162df1jsn8c677f919cb0"
twitter_app_auth = {
    'consumer_key': 'y3mZ9Rzjrdizbbaj4bkrXdM5r',
    'consumer_secret': 'J9WXvO5SFXWAdXb3utafFQG7VWRyW2JISUoYzDSLSQHWhvgMEv',
    'access_token': '1568379207142756352-GTb7EoGhGUZdPgnUKqxwzfFLy9Hc45',
    'access_token_secret': 'q7CNrAN9Fb67FafjSMENmE0bIscvYzRULHidhNJMQ1hMv',
  }
bom = botometer.Botometer(wait_on_ratelimit=True,
                          rapidapi_key=rapidapi_key,
                          **twitter_app_auth)

result = bom.check_account(screen_name)

print(user)