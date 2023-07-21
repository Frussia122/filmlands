using System.IO.Compression;

namespace films_server.Auth
{
    public class TokenService : ITokenService
    {
        private TimeSpan ExpiryDuration = new TimeSpan(3, 0, 0);
        public string buildToken(string key, string issuer, UserDto user)
        {
            var claims = new[]
            {
              new Claim(ClaimTypes.Name, user.username),
              new Claim(ClaimTypes.NameIdentifier, Guid.NewGuid().ToString())
            };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));

            var credentials = new SigningCredentials(securityKey,
                SecurityAlgorithms.HmacSha256);

            var tokenDescriptor = new JwtSecurityToken(issuer, issuer, claims,
                expires: DateTime.Now.Add(ExpiryDuration), signingCredentials:credentials);
            return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        }

      
    }
}
