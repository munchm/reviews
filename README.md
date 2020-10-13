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
Retrieves all the reviews for a particular restaurant id

```http
GET /api/reviews/:id
```

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

### Create Review
Creates a new review for a particular restaurant id

```http
POST /api/reviews/:id
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `productId` | `number` | The restaurant id |
| `userName` | `string` | A user's name |
| `userAvatar` | `string` | User's photo |
| `userLocation` | `string` | User's location |
| `userFriends` | `number` | Number of friends for a user |
| `userReviews` | `number` | Number of reviews from a user |
| `userPhotos` | `number` | Number of photos from a user |
| `userEliteStatus` | `boolean` | Boolean if a user has an elite status |
| `reviewRating` | `number` | The review rating from a user |
| `reviewBody` | `string` | A user's review of the product |
| `reviewDate` | `date` | The date a user posted their review |
| `reviewPhotos` | `number` | The number of photos a user posted in their review |
| `atrCool` | `number` | Number of how many marked a user's review as cool |
| `atrUseful` | `number` | Number of how many marked a user's review as useful |
| `atrFunny` | `number` | Number of how many marked a user's review as funny |
| `displayPhotos` | `[string]` | An array of photo urls |

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
PUT /api/reviews/:id
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `productId` | `number` | The restaurant id |
| `reviewRating` | `number` | The review rating from a user |
| `reviewBody` | `string` | A user's review of the product |
| `reviewDate` | `date` | The date a user edited their review |
| `reviewPhotos` | `number` | The number of photos a user posted in their review |
| `displayPhotos` | `[string]` | An array of photo urls |

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
  'reviewPhotos': 0,
  'atrCool': 1,
  'atrUseful': 2,
  'atrFunny': 3,
  'displayPhotos': []
}
```

### Delete Review
Deletes a user's review for a particular restaurant id

```http
DELETE /api/reviews/:id
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `productId` | `number` | The restaurant id |
| `userName` | `string` | A user's name |

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

