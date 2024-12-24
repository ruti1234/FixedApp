using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BrokenBlogApi.Controllers
{
    [ApiController]
    [Route("api/posts")]
    public class PostsController : ControllerBase
    {
        private static List<BlogPost> Posts = new List<BlogPost>
        {
            new BlogPost { Id = 1, Title = "First Post", Description = "Description of first post", Content = "Content of first post" },
            new BlogPost { Id = 2, Title = "Second Post", Description = "Description of second post", Content = "Content of second post" }
        };

        [HttpGet]
        public IActionResult GetPosts()
        {
            return Ok(Posts); 
        }

        [HttpGet("{id}")]
        public IActionResult GetPost(int id)
        {
            var post = Posts.Find(p => p.Id == id);
            if (post == null) 
                return Ok(new { Message = "Post not found" });

            return Ok(post);
        }

        [HttpPost]
        public IActionResult CreatePost([FromBody] BlogPost post)
        {
           
            post.Id = Posts.Count + 1;
            Posts.Add(post);
            return Ok();
        }
    }

    public class BlogPost
    {
        public int Id { get; set; }
        public string Title { get; set; }=string.Empty;
        public string Description { get; set; }=string.Empty;
        public string Content { get; set; }=string.Empty;
    }
}
