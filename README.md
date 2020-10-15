# Project Name

> Reviews Service for a social networking/local business review site.

## Related Projects

  - https://github.com/munchm/calender-reservation
  - https://github.com/munchm/photo-gallery
  - https://github.com/munchm/people-also-viewed
  - https://github.com/munchm/reviews

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Reviews API Usage

### Get Reviews
Retrieves all the reviews for a particular business id

```http
GET /api/reviews/:restaurantId
```

Success Status Code: `200`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `productId` | `number` | A restaurant id |

Response JSON:

```javascript
{
  'productId': 1,
  'userName': 'Bobby Blue',
  'userAvatar': 'https://photoreviews.s3-us-west-1.amazonaws.com/1}',
  'userLocation': 'Los Angeles CA',
  'userFriends': 30,
  'userReviews': 26,
  'userPhotos': 6,
  'userEliteStatus': true,
  'reviewRating': 5,
  'reviewBody': 'Lorem inpspum asjdfh q',
  'reviewDate': '10/01/2020',
  'reviewPhotos': 10,
  'atrCool': 1,
  'atrUseful': 2,
  'atrFunny': 3,
  'displayPhotos': []
}
```

### Get Review
Retrieves one review from reviewId

```http
GET /api/reviews/:reviewId
```

Success Status Code: `200`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `reviewId` | `number` | A restaurant id |

Response JSON:

```javascript
{
  'productId': 1,
  'userName': 'Bobby Blue',
  'userAvatar': 'https://photoreviews.s3-us-west-1.amazonaws.com/1}',
  'userLocation': 'Los Angeles CA',
  'userFriends': 30,
  'userReviews': 26,
  'userPhotos': 6,
  'userEliteStatus': true,
  'reviewRating': 5,
  'reviewBody': 'Lorem inpspum asjdfh q',
  'reviewDate': '10/01/2020',
  'reviewPhotos': 10,
  'atrCool': 1,
  'atrUseful': 2,
  'atrFunny': 3,
  'displayPhotos': []
}
```

### Create Review
Creates a new review for a particular business

```http
POST /api/reviews/:businessId
```

Success Status Code: `201`

Request Body: Expects JSON with the following

```javascript
{
  'productId': 1,
  'userName': 'Bobby Blue',
  'userAvatar': 'https://photoreviews.s3-us-west-1.amazonaws.com/1}',
  'userLocation': 'Los Angeles CA',
  'userFriends': 30,
  'userReviews': 26,
  'userPhotos': 6,
  'userEliteStatus': true,
  'reviewRating': 5,
  'reviewBody': 'Lorem inpspum asjdfh q',
  'reviewDate': '10/01/2020',
  'reviewPhotos': 0,
  'atrCool': 1,
  'atrUseful': 2,
  'atrFunny': 3,
  'displayPhotos': []
}
```

### Update Review
Updates a user's review by adding, replacing, or deleting fields

```http
PATCH /api/reviews/:reviewId
```
Success Status Code: `204`

Request Body: Expects JSON with any of the following keys (include only keys to be updated)

```javascript
{
  'productId': 1,
  'reviewRating': 5,
  'reviewBody': 'Lorem inpspum asjdfh q',
  'reviewDate': '10/01/2020',
  'reviewPhotos': 0,
  'displayPhotos': []
}
```

### Delete Review
Deletes a user's review for a particular restaurant id

```http
DELETE /api/reviews/:reviewId
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `productId` | `number` | The restaurant id |
| `userName` | `string` | A user's name |

Success Status Code: `204`

## Status Codes
Returns the following status codes within the API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

