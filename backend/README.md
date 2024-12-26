## Backend Setup (.NET Core)

1. Navigate to the `backend/` directory.
2. Restore dependencies: `dotnet restore`.
3. Run the application: `dotnet run`.
4. The API should be available at `http://localhost:5177`.



Code changes and improvements:

Changes in Files:

PostsController.cs:

### Code Improvements and Refactoring: Error Handling, Validation, and General Enhancements

---

Explanation of the changes made:

1. **Used `FirstOrDefault` instead of `Find`:**  
   I changed the method for finding a post by its ID from `Find` to `FirstOrDefault`. The `FirstOrDefault` method is more efficient and properly handles cases where the post is not found without throwing an exception.

2. **Improved Error Handling:**
   - In `GetPost(int id)`, when a post is not found, it now returns `NotFound` instead of `Ok`, along with a clearer error message.
   - Added validation in the `CreatePost` method to ensure that the `Title` and `Content` fields are not empty. If either is missing, a `BadRequest` error is returned.

3. **Improved HTTP Status Code Usage:**
   - In the `CreatePost` method, instead of using `Ok()` after creating a new post, I used `CreatedAtAction`, which returns the location of the newly created post (including the ID) in the `Location` header, aligning better with HTTP standards.

4. **Improved Code Readability:**
   - Added structured error messages in the API responses with a consistent JSON format.

Program.cs:

I replaced the unsupported methods with the correct configuration for Swagger.
I fixed the CORS settings and added the UseSwagger() method to enable API documentation.

backend.csproj:

I changed the Target Framework version from net9.0 to net7.0 because the previous version was not supported.
I replaced the Microsoft.AspNetCore.OpenApi package reference with the correct version of Swashbuckle.AspNetCore to properly integrate OpenAPI documentation.
Reason for Changes:

The changes were made because the code was not working with the original settings. There was an error loading the API documentation, and adjusting the versions and configurations was necessary to make the API documentation function properly.