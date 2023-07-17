namespace films_server.Auth
{
    public interface ITokenService
    {
        string buildToken(string key, string issuer, UserDto user);

    }
}
