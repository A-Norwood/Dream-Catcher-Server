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
