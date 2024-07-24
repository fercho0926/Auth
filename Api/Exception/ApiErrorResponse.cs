
namespace Api.Exception
{
    public class ApiErrorResponse
    {
        public ApiErrorResponse(int statusCode, string message =null)
        {
            StatusCode = statusCode;
            Message = message ?? GetMessageStatusCode(statusCode);
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }

        private string GetMessageStatusCode(int statusCode)
        {
            return statusCode switch
            {

                400 => "Request no valid",
                401 => "Not Authorized",
                404 => "Resource not found",
                500 => "Internal Server Error",
                _ => null
            };
        }

    }
}
