namespace films_server.Auth
{
    public interface IUserRepository
    {
        UserDto GetUser(UserModel userModel);
    }
}
