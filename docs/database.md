# Database and Persistence

The game does not use a database, browser storage, or file persistence. Score and game state are held in JavaScript variables and the DOM for the current page session. Reloading the page starts over.

There are no database schemas, migrations, seed data, connection strings, or environment variables. If score persistence is added later, document the storage location, retention, reset behavior, and privacy implications first.
