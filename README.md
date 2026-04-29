# Academy Attendance System API

This project uses JSON Server to provide a REST API for managing users, cohorts, and attendance records. The API runs on `http://localhost:3001` when started with `npm run api`.

## Data Models

### Users
- `id`: number (auto-generated)
- `name`: string
- `email`: string
- `password`: string (plain text for demo)
- `role`: "admin" | "student"
- `cohortId`: number | null (students only)
- `avatarInitials`: string
- `enrolledDate`: string | null (students only)

### Cohorts
- `id`: number (auto-generated)
- `name`: string
- `startDate`: string (YYYY-MM-DD)
- `endDate`: string (YYYY-MM-DD)
- `instructor`: string
- `description`: string

### Attendance
- `id`: number (auto-generated)
- `studentId`: number
- `cohortId`: number
- `date`: string (YYYY-MM-DD)
- `status`: "present" | "late" | "excused" | "absent"
- `checkInTime`: string | undefined (ISO timestamp for present/late)
- `note`: string

## Authentication

Authentication is handled client-side using localStorage. No JWT or real server auth.

- **Login**: Query users collection with email and password: `GET /users?email=X&password=Y`
- **Sign Up**: Create new user in users collection: `POST /users`
- **Protected Routes**: Every protected page calls `getUser()` on mount and redirects to `/sign-in` if null
- **Role-based Redirect**: After login, redirect to `/admin/dashboard` for admin or `/student/dashboard` for student

## Features

### Admin Features
- **Cohort Management**: Create, view, and manage cohorts
  - `/admin/cohorts` - View all cohorts
  - `/admin/cohorts/create` - Create a new cohort
- **Student Management**: View all enrolled students in dashboard
- **Admin Dashboard**: Central hub for all admin functions

### Student Features
- **Attendance Tracking**: View personal attendance records
- **Student Dashboard**: View individual attendance history

## API Endpoints

### Users

#### GET /users
Get all users.

**Response**: Array of User objects

#### GET /users/:id
Get user by ID.

**Response**: User object

#### POST /users
Create a new user.

**Request Body**: User object (without `id`)

**Response**: Created User object

#### PUT /users/:id
Update user completely.

**Request Body**: User object

**Response**: Updated User object

#### PATCH /users/:id
Update user partially.

**Request Body**: Partial User object

**Response**: Updated User object

#### DELETE /users/:id
Delete user.

**Response**: Empty (204)

#### GET /users?email=...&password=...
Query for login (returns array with matching user if found).

### Cohorts

#### GET /cohorts
Get all cohorts.

**Response**: Array of Cohort objects

#### GET /cohorts/:id
Get cohort by ID.

**Response**: Cohort object
#### POST /cohorts
Create a new cohort (admin only).

**Request Body**: Cohort object (without `id`)
```json
{
  "name": "Frontend Engineering - Cohort 3",
  "startDate": "2026-02-03",
  "endDate": "2026-06-30",
  "instructor": "Mr. Ade Coker",
  "description": "Full-stack frontend engineering with React, Next.js and TypeScript"
}
```

**Response**: Created Cohort object
#### POST /cohorts
Create a new cohort.

**Request Body**: Cohort object (without `id`)

**Response**: Created Cohort object

#### PUT /cohorts/:id
Update cohort completely.

**Request Body**: Cohort object

**Response**: Updated Cohort object

#### PATCH /cohorts/:id
Update cohort partially.

**Request Body**: Partial Cohort object

**Response**: Updated Cohort object

#### DELETE /cohorts/:id
Delete cohort.

**Response**: Empty (204)

### Attendance

#### GET /attendance
Get all attendance records.

**Response**: Array of AttendanceRecord objects

#### GET /attendance/:id
Get attendance record by ID.

**Response**: AttendanceRecord object

#### POST /attendance
Create a new attendance record.

**Request Body**: AttendanceRecord object (without `id`)

**Response**: Created AttendanceRecord object

#### PUT /attendance/:id
Update attendance record completely.

**Request Body**: AttendanceRecord object

**Response**: Updated AttendanceRecord object

#### PATCH /attendance/:id
Update attendance record partially.

**Request Body**: Partial AttendanceRecord object

**Response**: Updated AttendanceRecord object

#### DELETE /attendance/:id
Delete attendance record.

**Response**: Empty (204)

## Running the API

```bash
npm run api
```

This starts JSON Server on port 3001, watching `db.json` for changes.

## Example Usage

### Login
```bash
curl "http://localhost:3001/users?email=admin@academy.com&password=Admin1234!"
```

### Sign Up
```bash
curl -X POST http://localhost:3001/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "student"
  }'
```

### Get Attendance
```bash
curl http://localhost:3001/attendance
```
jest ---> unit
cypress ---> e2e


npx cypress open

<!-- playwrite -->
npm init playwright@latest
npx playwright test 
npx playwright test --ui




# How to connect Test
The most effective and recommended way to add a test tag to a React component for Cypress is by using a dedicated data attribute, such as data-cy or data-testid. This approach decouples your tests from your application's styling (CSS classes) and structural implementation details (IDs or HTML tags), making your tests significantly more resilient to UI changes. 
<!-- // MyButton.jsx
const MyButton = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      data-cy="submit-button" // Recommended: Use data-cy for Cypress-specific hooks
    >
      {label}
    </button>
  );
}; -->




<!-- // my-test.cy.js
it('should click the submit button', () => {
  cy.visit('/my-page');
  
  // Select the element using the data-cy attribute
  cy.get('[data-cy="submit-button"]').click();
}); -->




The short answer is no, Cypress cannot test a native React Native app directly in its native environment (iOS/Android). Cypress is built specifically for anything that runs in a web browser. [1, 2, 3, 4] 
However, there is a common "workaround" and better-suited alternatives depending on your goals. [5] 
------------------------------
## 1. The "Web Mode" Workaround
If you use Expo or react-native-web, you can run your React Native app as a web application. [5, 6] 

* How it works: You bundle your React Native code for the web and point Cypress to the local URL (e.g., http://localhost:19006).
* Pros: Fast setup and excellent debugging.
* Cons: It doesn't test native features like push notifications, camera, or platform-specific gestures (e.g., swiping on iOS). [7, 8, 9, 10, 11] 

## 2. Recommended Native Testing Tools
For true native end-to-end (E2E) testing on simulators or real devices, the industry standard tools are:

| Tool [11, 12, 13, 14, 15] | Type | Best For |
|---|---|---|
| Detox[](https://wix.github.io/Detox/) | Gray-box | Specifically built for React Native; very fast and stable. |
| Maestro[](https://maestro.mobile.dev/) | Black-box | YAML-based, extremely simple setup, and works across iOS/Android. |
| Appium[](https://appium.io/) | Black-box | Cross-platform flexibility; ideal if you need to test Windows or hybrid apps too. |

## 3. Unit & Component Testing
For testing individual React Native components (logic and UI rendering) without a full app boot, use:

* [Jest](https://jestjs.io/): Pre-configured with React Native projects.
* [React Native Testing Library (RNTL)](https://callstack.github.io/react-native-testing-library/): Simulates user interactions (like fireEvent.press) in a way that mimics real-world usage. [13, 16, 17, 18] 

------------------------------
💡 Summary: Use Cypress only if you are already targeting the web. If you want to ensure your app works on an actual iPhone or Android device, you should look into Detox or Maestro.
Are you looking to test business logic or the actual UI on a mobile device?
