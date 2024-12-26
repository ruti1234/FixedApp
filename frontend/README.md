## Frontend Setup (Angular)

1. Navigate to the `frontend/` directory.
2. Install dependencies: `npm install`.
3. Run the application: `ng serve`.
4. The app should be available at `http://localhost:4200`.

Code Improvements and Refactoring:

Error Handling:
Files Affected: BlogService.ts and BlogComponent.ts
What Changed: Added error handling for failed API requests.
Why: To provide feedback to the user when something goes wrong (e.g., failed network requests).

Form Validation:
Files Affected: BlogComponent.ts
What Changed: Added validation to ensure Title and Content are provided before submitting a new post.
Why: To prevent submitting incomplete data and ensure valid inputs.

UI Feedback for Errors:
Files Affected: BlogComponent.ts
What Changed: Display error messages on the UI when an error occurs.
Why: To inform users when something goes wrong (e.g., failed to create a post).

Code Refactoring:
Files Affected: BlogComponent.ts
What Changed: Improved code readability and maintainability (e.g., clearing form fields after post creation).
Why: To make the code easier to manage and reduce future bugs.


