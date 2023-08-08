using Azure;
using films_server.Auth;

namespace films_server.Apis
{
    public class AuthApi :IApi
    {

        public void Register(WebApplication app)
        {
            app.MapGet("/login", [AllowAnonymous] async (HttpContext context,
                ITokenService tokenService, IUserRepository userRepository) =>
            {
                UserModel userModel = new()
                {
                    UserName = context.Request.Query["username"],
                    Password = context.Request.Query["password"]
                };
                var userDto = userRepository.GetUser(userModel);
                if (userDto == null) return Results.Unauthorized();

                var token = tokenService.buildToken(app.Configuration["Jwt:Key"],
                    app.Configuration["Jwt:Issuer"], userDto);

                var refreshToken = tokenService.GenerateRefreshToken(app.Configuration["Jwt:Key"],
                    app.Configuration["Jwt:Issuer"]);// Здесь нужно получить Refresh Token после успешной аутентификации.
                var options = new CookieOptions
                {
                    HttpOnly = true,
                    Expires = DateTime.UtcNow.AddDays(7) // Устанавливаем срок действия куки (например, 7 дней).
                };
                context.Response.Cookies.Append("refreshToken", refreshToken, options);

                return Results.Ok(token);
            });
        }
    }
}
