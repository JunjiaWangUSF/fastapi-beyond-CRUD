# FastAPI Beyond CRUD

## Table of Contents

1. [Running the Application](#running-the-application)

2. [Contributing](#contributing)

## Getting Started

Follow the instructions below to set up and run your FastAPI project.

### Prerequisites

Ensure you have the following installed:

- Docker

### Running the Application

1. Clone the project repository:
   ```bash
   git clone https://github.com/jod35/fastapi-beyond-CRUD.git
   ```
2. Navigate to the project directory:

   ```bash
   cd fastapi-beyond-CRUD/
   ```

3. Create and activate a virtual environment:

   ```bash
   python3 -m venv env
   source env/bin/activate
   ```

4. Set up environment variables by copying the example configuration:

   ```bash
   cp .env.example .env
   ```

5. Run database migrations to initialize the database schema:
   ```bash
   docker compose up -d
   ```

## Github Action

### Convential checking:

commit-check.yml - GitHub actions that verify that Conventional Commits were used during PR creation. Close the PR if a user does not follow the Conventional Commit and send a notification about the failure.

For more information please check here: https://github.com/conventional-changelog/commitlint

### Night time build:

night-build.yml - Create nightly builds (12am UTC) from Main and push the container image to a container registry of choice. If test cases fail, the nightly build fails and cannot be stored in the registry and notification is sent to users.

Github container registry - https://github.com/JunjiaWangUSF?tab=packages

## Script

```bash
/script/sendBuildFailures.js
/script/sendEmail.js
```

Each file handle a failure case and will nofiy admin user.

## Running Tests

Run the tests using this command

```bash
pytest
```

## Contributing

I welcome contributions to improve the documentation! You can contribute [here](https://github.com/jod35/fastapi-beyond-crud-docs).
