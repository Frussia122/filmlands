namespace films_server.Auth
{
    public class UserRepository : IUserRepository
    {
        private List<UserDto> _users => new()
        {
            new UserDto("John","123"),
            new UserDto("Nancy","123"),
            new UserDto("John","123"),
            new UserDto("John1","123"),
            new UserDto("John2","123"),
            new UserDto("John3","123"),
            new UserDto("John4","123"),
            new UserDto("John5","123")
        };
        public UserDto GetUser(UserModel userModel) =>
        
            _users.FirstOrDefault(u =>
                string.Equals(u.username, userModel.UserName) &&
                string.Equals(u.password, userModel.Password)) ??
                throw new Exception();
    }
}
