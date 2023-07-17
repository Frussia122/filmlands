namespace films_server.Auth
{
    public record UserDto(string username, string password);

    public record UserModel
    {
        [Required]
        public string UserName { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
    }
}
