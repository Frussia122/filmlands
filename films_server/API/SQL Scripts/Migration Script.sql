create database FilmLands_db
go
use  FilmLands_db
go
--create Authentication part
create table [User]
(
 Id int primary key not null identity,
 Username nvarchar(max) not null,
 Password nvarchar(max) not null
);
go
create table Token
(
 Id int not null primary key foreign key references [User](Id) on delete cascade,
 TokenInfo nvarchar(max) not null,
 LifeTime int not null,
 QueriesCount int not null,
 UserId int not null
);
go

--create movies part
create table Movie
(
Id INT not null primary key Identity,
Title nvarchar(max) not null,
[Description] nvarchar(max) not null,
[Date] int not null,
ReleaseDate nvarchar(max) not null,
Duration nvarchar(max) not null,
Trailer nvarchar(max) not null,
Raiting nvarchar(max) not null,
Director nvarchar(max) not null,
Country nvarchar(max) not null,
AgeLimit nvarchar(max) not null
);
go

create table Actor
(
Id INT not null primary key Identity,
[Name] nvarchar(max) not null,
[Surname] nvarchar(max) not null,
[Picture] nvarchar(max) not null,
BirthDate nvarchar(max) not null,
BirthPlace nvarchar(max) not null,
[Description] nvarchar(max) not null,
MovieId int foreign key references Movie(Id) on delete cascade not null
);
go
 create table Poster
 (
 Id INT not null primary key foreign key references Movie(Id)on delete cascade,
 SmallPoster nvarchar(max) not null,
 BigPoster nvarchar(max) not null,
 MovieId int not null
 );
 go
 create table Genre
 (
 Id int not null primary key foreign key references Movie(Id)on delete cascade,
 [Description] nvarchar(max) not null,  
 MovieId int not null
 );
 go