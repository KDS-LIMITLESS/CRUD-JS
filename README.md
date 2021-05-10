
# ZJS
- A CRUD api built with node.js 

## API Reference
```http
    https://zjs.herokuapp.com/
```
- ### Get all users

```http
  GET /api/users
```

| Parameter | Type     | Description                | 
| :-------- | :------- | :--------------------------|  
| null | `string` | Gets list of users in database  | 

#### curl

```http
    curl https://zjs.herokuapp.com/api/users 
```
- ### Create new users

```http 
    POST /api/users
```

| Parameter | Type     | Description       | 
| :-------- | :------- | :---------------- | 
| null      | `string` | create a new user |  

#### curl

``` http
    curl -d '{"name": "value", "email": "value", "country" : "value"}' -H "Content-Ty
    pe: application/json" -X POST https://zjs.herokuapp.com/api/users
```

- ### Update existing user

```http
  PUT /api/users/:email
```

| Parameter | Type     | Description                       | 
| :-------- | :------- | :-------------------------------- | 
| email      | `string` | Search for a user with given email|                                                 
|           |           |and update user if found.      |

#### curl

``` http
      curl -d '{"name": "value", "email": "value", "country" : "value"}' -H "Content-Ty
      pe: application/json" -X PUT https://zjs.herokuapp.com/api/users/<email> 
```

- ### Delete user

```http
  DELETE /api/users/:email
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| email      | `string` | Deletes a user with given email if found.|


#### curl

```http
  curl -X DELETE https://zjs.herokuapp.com/api/users/<email>

```

## Authors

- [@KAMAH DANIEL SOMTOCHUKWU](https://www.github.com/KDS-LIMITLESS)

## Licence

- MIT

  