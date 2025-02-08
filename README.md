# Inaccurate Counter Increment with Firebase's `once()` in Concurrent Environments

This repository demonstrates a common issue when using Firebase's `once()` method to increment a counter in a concurrent environment.  The problem arises from race conditions: multiple users trying to update the counter simultaneously may lead to inaccurate results.

The `incrementCounterBug.js` file shows the buggy implementation. The `incrementCounterSolution.js` file presents a solution using transactions to ensure atomicity.