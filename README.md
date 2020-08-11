# Dream Catcher App
Have you ever woken up from a dream and thought "Wow, I want to remember this dream, but I know if I don't log it now, I'll never remember."? Well, this application is perfect for you. Keep your phone or computer by your bed, and as soon as you wake up from that dream, log it with the Dream Catcher App! You can log the dream, go back and edit the dream, delete the dream if you just don't want to remember anymore, and go back and read through those dreams. No more trying to rack your brain for that dream you had 2 weeks ago. They are all here and organized in your dream log. This is the server side of the Dream Catcher app which works with the client side for full functionality. Refer to links below.

## Links
- [Deployed Application](https://shrouded-anchorage-21234.herokuapp.com/)
- [Front End Repository](https://github.com/A-Norwood/Dream-Catcher-client)

## ERD
[Link to ERD](https://imgur.com/7zF90Yf)

## Technologies Used
-   Express
-   Mongoose
-   MongoDB
-   cURL Scripts
-   Heroku
-   Keynote

## Planning
I started this project by first coming up with an idea that I found interesting and also useful to a user. I created an ERD and wireframes for my project for reference. To start the actual coding portion of the project I began by downloading the browser template provided, and built my routes and testing with cURL scripts along the way. I then moved on to the server side of the application for full functionality.


## API Information
### Dreams
| Verb   | URI Pattern  | Controller#Action  |
|:-------|:-------------|:-------------------|
| GET    | `/dreams`     | `dreams#index`  |
| GET    | `/dreams/:id` | `dreams#show`   |
| POST   | `/dreams`     | `dreams#create` |
| PATCH  | `/dreams/:id` | `dreams#update` |
| DELETE | `/dreams/:id` | `dreams#destroy` |


### GET /dreams
Example Curl Request:
```sh
#!/bin/sh

API="http://localhost:4741"
URL_PATH="/dreams"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

echo

```

Example Terminal Command:
```sh
TOKEN="6a4694d27db15fdd39e16df0bd731a36" sh curl-scripts/dreams/index.sh
```


Example API Response:
```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 381
ETag: W/"17d-XHjSseEzShqteDDrC09uDUUfxKE"
Date: Sun, 09 Aug 2020 15:33:33 GMT
Connection: keep-alive

{"dreams":[{"_id":"5f3016551bb8e2fa75d90dea","date":"2020-08-01T00:00:00.000Z","title":"Weirdest Dream Ever","location":"home","sleep_time":"10pm","wake_time":"7am","description":"my teeth fell out","quality":"fair","meaning":"changes are coming in my life","owner":"5f3015751bb8e2fa75d90de8","createdAt":"2020-08-09T15:29:25.588Z","updatedAt":"2020-08-09T15:29:25.588Z","__v":0}]}
```

---
### GET /dreams/:id
Example Curl Request:
```sh
#!/bin/sh

API="http://localhost:4741"
URL_PATH="/dreams"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo

```

Example Terminal Command:
```sh
TOKEN="6a4694d27db15fdd39e16df0bd731a36" ID="5f3016551bb8e2fa75d90dea" sh curl-scripts/dreams/show.sh
```

Example API Response:
```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 378
ETag: W/"17a-wd9OqEq7kiRvzIY4GyNmuWcA6YI"
Date: Sun, 09 Aug 2020 16:05:24 GMT
Connection: keep-alive

{"dream":{"_id":"5f3016551bb8e2fa75d90dea","date":"2020-08-01T00:00:00.000Z","title":"Weirdest Dream Ever","location":"home","sleep_time":"10pm","wake_time":"7am","description":"my teeth fell out","quality":"fair","meaning":"changes are coming in my life","owner":"5f3015751bb8e2fa75d90de8","createdAt":"2020-08-09T15:29:25.588Z","updatedAt":"2020-08-09T15:29:25.588Z","__v":0}}

```

---
### POST /dreams
Example Curl Request:

```sh
#!/bin/bash

API="http://localhost:4741"
URL_PATH="/dreams"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "dream": {
      "date": "'"${DATE}"'",
      "title": "'"${TITLE}"'",
      "location": "'"${LOCATION}"'",
      "sleep_time": "'"${SLEEP}"'",
      "wake_time": "'"${WAKE}"'",
      "description": "'"${DESCRIPTION}"'",
      "quality": "'"${QUALITY}"'",
      "meaning": "'"${MEANING}"'"
    }
  }'

echo
```

Example Terminal Command:
```sh
 DATE="2020-08-01" TITLE="Weirdest Dream Ever" LOCATION="home" SLEEP="10pm" WAKE="7am" DESCRIPTION="my teeth fell out" QUALITY="fair" MEANING="changes are coming in my life" TOKEN=6a4694d27db15fdd39e16df0bd731a36 sh curl-scripts/dreams/create.sh
```

Example API Response:
```md
HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 378
ETag: W/"17a-wd9OqEq7kiRvzIY4GyNmuWcA6YI"
Date: Sun, 09 Aug 2020 15:29:25 GMT
Connection: keep-alive

{"dream":{"_id":"5f3016551bb8e2fa75d90dea","date":"2020-08-01T00:00:00.000Z","title":"Weirdest Dream Ever","location":"home","sleep_time":"10pm","wake_time":"7am","description":"my teeth fell out","quality":"fair","meaning":"changes are coming in my life","owner":"5f3015751bb8e2fa75d90de8","createdAt":"2020-08-09T15:29:25.588Z","updatedAt":"2020-08-09T15:29:25.588Z","__v":0}}
```

---
### PATCH /dreams/:id
Example Curl Request:
```sh
API="http://localhost:4741"
URL_PATH="/dreams"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "dream": {
      "date": "'"${DATE}"'",
      "title": "'"${TITLE}"'",
      "location": "'"${LOCATION}"'",
      "sleep_time": "'"${SLEEP}"'",
      "wake_time": "'"${WAKE}"'",
      "description": "'"${DESCRIPTION}"'",
      "quality": "'"${QUALITY}"'",
      "meaning": "'"${MEANING}"'"
    }
  }'

echo
```

Example Terminal Command:
```sh
ID="5f3016551bb8e2fa75d90dea" TOKEN="6a4694d27db15fdd39e16df0bd731a36" DATE="2020-08-06" TITLE="updated title" LOCATION="home" SLEEP="11pm" WAKE="9am" DESCRIPTION="updated description" QUALITY="great" MEANING="updated meaining" sh curl-scripts/dreams/update.sh

```

Example API Response:
```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Sun, 09 Aug 2020 17:03:59 GMT
Connection: keep-alive
```

---
### DELETE /dreams/:id
Example Curl Request:
```sh
API="http://localhost:4741"
URL_PATH="/dreams"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
```

Example Terminal Command:
```sh
ID="5f3016551bb8e2fa75d90dea" TOKEN="6a4694d27db15fdd39e16df0bd731a36" sh curl-scripts/dreams/destroy.sh
```

Example API Response:
```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Sun, 09 Aug 2020 17:05:09 GMT
Connection: keep-alive
```

## Unsolved Problems
In future versions, I would like to rearrange in order to add a subdoc for the user's sleep. I would like to add more information about the user's sleep relating to that dream. I would like to do more with styling as well.
