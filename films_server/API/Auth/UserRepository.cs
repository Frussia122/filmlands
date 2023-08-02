namespace films_server.Auth
{
    public class UserRepository : IUserRepository
    {
        private List<UserDto> _users => new()
        {
            new UserDto("Midgard","111")
        };
        public UserDto GetUser(UserModel userModel) =>
        
            _users.FirstOrDefault(u =>
                string.Equals(u.username, userModel.UserName) &&
                string.Equals(u.password, userModel.Password)) ??
                throw new Exception();
    }
}
