# Go Rest Console

Refer to the below image.

![go-rest-api-console-v1](https://user-images.githubusercontent.com/90957976/136194672-2a1b6f48-194f-4719-8fbc-40549b1145e4.gif)

Instructions:

- Add an id consoleForm to the HTML form element
- Add the ids requestUrl and responseStatus to the HTML input elements
- Add an id requestUrlErrMsg to the HTML p element with the class name error-msg
- Add an id requestMethod to the HTML select element
- Add the ids requestBody and responseBody to the HTML textarea elements respectively


Achieve the given functionality to the given prefilled code.

- When the HTML form element with the id consoleForm is submitted,
- If the values of the HTML input element with the id requestUrl is empty the HTML paragraph element with the id requestUrlErrMsg should have Required* error message. Otherwise, it should have empty.
- Set the value entered in the HTML textarea element with the id requestBody as the value for HTTP request body.
- If the value of the requestMethod element is POST,
- Make HTTP Request (POST method) using fetch using the value of the HTML input element as URL.
- If the value of the requestMethod element is PUT,
- Make HTTP Request (PUT method) using fetch using the value of the HTML input element as URL.
- Set response status (status code) in the HTML input element with the id responseStatus.
- Set HTTP response body in the HTML textarea element with the id responseBody as shown in the image.

Note : 

- Change the request URL according to the selected request method.
- Ensure you should give the request body object with the keys id, name, email, gender, and status as shown in the image.
- While giving the value to the HTML textarea element with the id requestBody, make sure you keep the double quotes (" ") to the object keys as shown in the image.

Resources

**CSS Font families used:**

    Roboto
    Request URLs used:

    https://gorest.co.in/public-api/users
