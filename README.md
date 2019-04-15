# Lambda School Product Queue API
The back-end for the Lambda School Build Week 4/15 Product Queue project.

## Base URL
- https://productqueue.herokuapp.com

## Register a New User

HTTP Method: POST
URL: /api/users/register

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |

### Body
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| first_name | String | Yes | First name of user |
| last_name | String | Yes | Last name of user |
| company | String | Yes | User's company's name |
| email | String | Yes | User's email address |
| password | String | Yes | User's chosen password |

### Example

```json
{
	"first_name": "Kevin",
    "last_name": "Smith",
    "company": "New Company",
    "email": "new@user.com",
    "password": "password"
}
```

### Response

**201 (Created)**
> If successfully registered, endpoint will return HTTP response with status code and a body with a token

**400 (Bad Request)**
> If required information is missing, the endpoint will return an HTTP response with a status code of 400

**500 (Internal Server Error)**
> If there was a server error registering the user, a response with status code 500 will be returned.

## Log In a User

HTTP Method: POST
URL: /api/users/login

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| Content-Type | String | Yes | Must be application/json |

### Body
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| email | String | Yes | User's email address |
| password | String | Yes | User's password |


### Example

```json
{
    "email": "new@user.com",
    "password": "password"
}
```

### Response

**200 (OK)**
> If successfully registered, endpoint will return HTTP response with status code and a body with a token

**401 (Unauthorized)**
> If email address is not found or password is incorrect, status 401 will be returned

**500 (Internal Server Error)**
> If there was a server error logging the user in, a response with status code 500 will be returned.