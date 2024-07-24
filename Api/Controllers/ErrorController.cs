using Api.Exception;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{

    [Microsoft.AspNetCore.Components.Route("errors/{code}")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ErrorController :BaseApiController
    {

        public IActionResult Error(int code) {

            return new ObjectResult(new ApiErrorResponse(code));
        }
    }
}
