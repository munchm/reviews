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
GET /api/business/:businessId/reviews
```

Success Status Code: `200`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `businessId` | `number` | A business id |

Response JSON:

```javascript
[{
  'reviewId': 'Number',
  'userId': 'Number',
  'businessId': 'Number',
  'userName': 'String',
  'userAvatar': 'String',
  'userLocation': 'String',
  'userFriends': 'Number',
  'userReviews': 'Number',
  'userPhotos': 'Number',
  'userEliteStatus': 'Boolean',
  'reviewRating': 'Number',
  'reviewBody': 'String',
  'reviewDate': 'Date',
  'reviewPhotos': 'Number',
  'atrCool': 'Number',
  'atrUseful': 'Number',
  'atrFunny': 'Number',
  'displayPhotos': '[String]'
}, ...]
```

### Get User Reviews
Retrieves user's reviews

```http
GET /api/user/:userId/reviews/
```

Success Status Code: `200`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `userId` | `number` | A user id |

Response JSON:

```javascript
[{
  'reviewId': 'Number',
  'userId': 'Number',
  'businessId': 'Number',
  'userName': 'String',
  'userAvatar': 'String',
  'userLocation': 'String',
  'userFriends': 'Number',
  'userReviews': 'Number',
  'userPhotos': 'Number',
  'userEliteStatus': 'Boolean',
  'reviewRating': 'Number',
  'reviewBody': 'String',
  'reviewDate': 'Date',
  'reviewPhotos': 'Number',
  'atrCool': 'Number',
  'atrUseful': 'Number',
  'atrFunny': 'Number',
  'displayPhotos': '[String]'
}, ...]
```

### Create Review
Creates a new review for a particular business

```http
POST /api/business/:businessId/users/:userId/review
```

Success Status Code: `201`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `businessId` | `number` | A business id |
| `userId` | `number` | A user id |

Request Body: Expects JSON with the following

```javascript
{
  'reviewId': 'Number',
  'userId': 'Number',
  'businessId': 'Number',
  'userName': 'String',
  'userAvatar': 'String',
  'userLocation': 'String',
  'userFriends': 'Number',
  'userReviews': 'Number',
  'userPhotos': 'Number',
  'userEliteStatus': 'Boolean',
  'reviewRating': 'Number',
  'reviewBody': 'String',
  'reviewDate': 'Date',
  'reviewPhotos': 'Number',
  'atrCool': 'Number',
  'atrUseful': 'Number',
  'atrFunny': 'Number',
  'displayPhotos': '[String]'
}
```

### Update Review
Updates a user's review by adding, replacing, or deleting fields

```http
PATCH /api/users/:userId/reviews/:reviewId
```
Success Status Code: `204`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `userId` | `number` | A user id |
| `reviewId` | `number` | A review id |

Request Body: Expects JSON with any of the following keys (include only keys to be updated)

```javascript
{
  'reviewRating': 'Number',
  'reviewBody': 'String',
  'reviewDate': 'Date',
  'reviewPhotos': 'Number',
  'displayPhotos': '[String]'
}
```

### Delete Review
Deletes a review

```http
DELETE /api/users/:userId/reviews/:reviewId
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `userId` | `number` | The user id |
| `reviewId` | `number` | The review id |

Success Status Code: `204`

## Status Codes
Returns the following status codes within the API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 204 | `DELETED` |
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

