using Api.Exception;
using Data;
using Data.Entities.UserManagement;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class PruebasController :BaseApiController
    {
        private readonly AppDbContext _db;

        public PruebasController(AppDbContext db)
        {
            _db = db;
        }

        //[Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetNotAuthorize() {

            return "not authorize";
        
        }

        //[Authorize]
        [HttpGet("not-found")]
        public ActionResult<User> GetNotFound()
        {

            var obj = _db.Users.Find(Guid.NewGuid());
            if (obj == null) return NotFound( new ApiErrorResponse(400));

            return obj;

        }

        //[Authorize]
        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {

            var obj = _db.Users.Find(Guid.NewGuid());
var obstring = obj.ToString();


            return obstring;

        }




    }
}
