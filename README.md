# Task Manager

A simple PHP task management application with a modular backend and frontend

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/mujahid-work/task-manager.git
```

### Backend Setup

### 2. Install PHP Dependencies

```sh
cd task-manager/backend ---> for backend
composer install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and update your database credentials:

```sh
cp .env.example .env
```

Edit `.env` and set your MySQL host, database, username, and password.

### 4. Run Database Migrations

Create your database, then run migrations:

```sh
mysql -u {username} -p {password} {database-name} < database/migrations/{migration-file}.sql
```

then run seeder
```sh
mysql -u {username} -p {password} {database-name} < {path-to-dir}/task-manager/backend/database/migrations/{seeder-file}.sql
```

### 5. Start the Development Server

```sh
php -S localhost:8000 -t public
```

### 6. Run Backend Tests

```sh
cd task-manager/backend
vendor/bin/phpunit tests/
```


### Frontend Setup

#### 1. Install Frontend Dependencies

```sh
cd task-manager/frontend ---> for frontend
npm install
```

#### 2. Start the Frontend Development Server

```sh
npm start
```

#### 3. Run Frontend Tests

```sh
npm test
```