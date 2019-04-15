# Lambda School Product Queue API
The back-end for the Lambda School Build Week 4/15 Product Queue project.

## Base URL
- https://productqueue.herokuapp.com

## Register a New User

HTTP Method: POST
URL: /api/users

### Headers

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| e.g. Content-Type | e.g. String | Yes/No | e.g. Must be application/json |

### Body
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| e.g. first_name | e.g. String | Yes/No | e.g. First name of user |

### Example

```json
{
    "first_name": "Kevin"
}
```

### Response

**201 (OK)**
> If successfully registered, endpoint will return HTTP response with status code and a body like the example above

**400 (Bad Request)**
> If required information is missing, the endpoint will return an HTTP response with a status code of 400

**500 (Internal Server Error)**
> If there was a server error registering the user, a response with status code 500 will be returned.