using System.IO.Compression;

namespace films_server.Auth
{
    public class TokenService : ITokenService

    { 
        private readonly TimeSpan RefreshTokenExpiryDuration = new TimeSpan(7, 0, 0, 0); // Время жизни Refresh Token (например, 7 дней).

        private readonly string _key;
        private readonly string _issuer;


        private TimeSpan ExpiryDuration = new TimeSpan(7200, 0, 0);
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

        public string GenerateRefreshToken(string key, string issuer)
        {
            var refreshTokenId = Guid.NewGuid().ToString(); // Идентификатор Refresh Token.

            var refreshTokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("refreshTokenId", refreshTokenId) }),
                Expires = DateTime.Now.Add(RefreshTokenExpiryDuration),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key)), SecurityAlgorithms.HmacSha256Signature)
            };

            var refreshToken = new JwtSecurityTokenHandler().CreateToken(refreshTokenDescriptor);

            return new JwtSecurityTokenHandler().WriteToken(refreshToken);
        }


    }
}
