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

INSERT [User] (Username,Password) VALUES('Nancy','123')
GO


create table Token
(
 Id int not null identity ,
 TokenInfo nvarchar(max) not null,
 LifeTime int not null,
 QueriesCount int not null,
 UserId int primary key foreign key references [User](Id) on delete cascade
);
go

INSERT Token (TokenInfo,LifeTime,QueriesCount,UserId) VALUES
('fdsg',5,1000,1)
GO

--create movies part
create table Movies
(
Id INT not null primary key Identity,
Title nvarchar(max) not null,
ReleaseDate nvarchar(max) not null,
Duration nvarchar(max) not null,
Trailer nvarchar(max) not null,
Raiting nvarchar(max) not null,
Director nvarchar(max) not null,
Country nvarchar(max) not null,
AgeLimit nvarchar(max) not null
);
go

INSERT Movies (Title, ReleaseDate, Duration, Trailer,Raiting,Director,Country,AgeLimit) VALUES
('������','15 ������� 2014','134���','data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAByhFNm3RAHU27i1OrhBVJqWZTrIHlTbuMU6uEFlSua1OsggEj7AEAAAAAAAC5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAADIq17GDD0JATYCNTGF2ZjU3Ljc2LjEwMFdBjUxhdmY1Ny43Ni4xMDBEiYhASwAAAAAAABZUrmsBAAAAAAAAYq4BAAAAAAAAWdeBAXPFgQGcgQAitZyDdW5khoZBX09QVVNWqoNjLqBWu4QExLQAg4EC4QEAAAAAAAARn4ECtYhA53AAAAAAAGJkgSBjopNPcHVzSGVhZAECOAGAuwAAAAAAH0O2dQEAAAAAAAAt54EAo4eBAACA/P/+o4eBABWA/P/+oAEAAAAAAAAPoYeBACkA/P/+daKDa3KD',
'IMDb: 7.60516 786','����� ���','���','18+')
GO

create table Actors
(
Id INT not null primary key Identity,
[Name] nvarchar(max) not null,
[Surname] nvarchar(max) not null,
[Picture] nvarchar(max) not null,
BirthDate nvarchar(max) not null,
BirthPlace nvarchar(max) not null,
[Description] nvarchar(max) not null,
MovieId int foreign key references Movies(Id) on delete cascade not null
);
go

INSERT Actors ([Name],[Surname],[Picture],BirthDate,BirthPlace,[Description],MovieId) VALUES
('����','����','https://www.kinopoisk.ru/name/25584/photos/',
'18 �������, 1963','�����, ��������, ���','� ������� �������: �����, ��������',1),
('���� ','�����','https://www.kinopoisk.ru/name/30162/photos/',
'11 ����, 1986 ',
'���-��������, ����������, ���','� ������� ������� �����, ��������, ���������, ��������',1)
GO

 create table Poster
 (
 Id INT not null identity ,
 SmallPoster nvarchar(max) not null,
 BigPoster nvarchar(max) not null,
 MovieId int primary key foreign key references Movies(Id)on delete cascade not null
 );
 go

 INSERT Poster (SmallPoster,BigPoster,MovieId) VALUES
('https://www.kinopoisk.ru/F16N4S122/788019fUdGO/73bT7XI-xqPD1a9AMKsnbGcva3W1QfUp3hCmYkvMT2ECZ6vgJquW50H_iPv4h8ny0MVo4TJDi5IEb2wDWFfCnm4l0_q2uYU3lFK_VaVqZmqg-vxk89PguNlUcTScB4NrDu33aalhnuxZrhiqvVHd5UDXPje3gFiXgHP2kwcO2EhjelKkN2CHpERMbQJ1YqymMSkhPGAFseFIFu3vTcNI5U7pMuElYRRtlmCXr-jf0erFF3zx8sJBFs4_-4jOx5UG7rBQrLXpBWsCiicG8WHqKrDhqnAtw7hlzJIqY00GwemAr_trbyqU4JcpH6MmmhnuAha_d3IPQtrO-jgBD4gcAml6FaS7a8ijjo6rhjhqo2DxoWl548h37E8YLiFLCcXvgKb4IiBrn-VRqRauJZ_T4sjVc_t_h4pYA7F6D0fO3Emt_hDks2aJb4yHbQn_6uQuuikhO6ZCeSKEWq2qQ8RC6Ufm-Wso6VsiFKpV5COY3CuIl7d5NgcKFob-NU6CwRvJLfIbaTMuQa-LiyVK9ycoZPTnJHmkAb7ohhCqYE2IxW3L5jHj6KedZZBrVuumn5MggNb9M_JDgt7GdTnFAIBTz6GyXm086IcrQU8hQrpvp2v3767zq4y-6YaQ7epKAQUvRSs1pi_qH6CT4hRspxrb7ciVNT7xgApbhraxD8CAWUGjcpigO2gJZskGZ0nxYKzpfinjfu9DOOkH3OEiA0jEbQDu_KgpqppvHKBc56Wf3OKNXn6-tkCKUAf0ectCB1NHLf8XoTerzaMMBKnBMmxqrvYo7_2lzrYoBFbvKooNyKZEIDwuoGhRq1fqU2UgUVLtSNK8vHdMh9YG_3QKwcLaSut4Hyh0Lk9gAY1kjDhsYGq4Ke-zYAU2pEma6eXJSYcmz-m97qEt260RJ5vuJ9WXJwKYfP15Ts2QRXB8iIkI1YZrcBFgM6AEZ8SO6wQ1bqdgcSKrtK_NMiAF2ChqxIzA68omfWbm7t7sUKkYZCRTm-QAlr-9ssjP1oc_vEYHAtJJajtQ4r_jQ2iEg2pBvmBi7DovYPskAfToDldoq8aNjicNoDpr5OeUKtGq0C1tU5KsRZK49H8ED5uJPTDFh8pYzyrwmysybgxpxUBgTvFoYii3Z-exJY305ccUIG3DiQXuiC_wKaGnHGRabxEr65hVY01XvnAzx8JZBPzyiYaBWshhd9gvsqaG5krLoYK_r21rOK2reCKMN-kFEO5lSYFH6owtsqDvK57nlGZebetQnGeLkL_4sQTA18B1MAUFgNIIpPYfID5lhWfFTmDM8Geoof8oqTLkzffvBlfhYEUOySGF6fzurWGWLJZiEaRiURImCtG_-D9Lwh5GvHiCQUxdQGZ7Xaf4bwthwU2gQfFg7mg9oWa6o4a8J8RZ5a-DSYFhQqh14SNjn-wYI5QnLNbfJcGRtnz7xoYfBXo7D0dGVMvjMlKoemzEZg6FKwg_q66geG0h-uqKuCLJGOltTIgJoUwheO7naxpsFCXRraCRk6fNG7F0v8lNlY-_8gAPSp-K4rNdIj5rQeDKiKeL92ugL_XibrAtCfrsjxhk4s1BxqhDr7Qk42MVLpPvGOakk5Imgttwe_5CAtPBcPLBBcGVDS05W2uyZoavTYAvin4upyg36qPzIon86kSXaaRMSgnoSC28aeztneba5pCmI5OWYgfefri2SQiRDDd9ycoIWsClvd-od6CNrIOEZQo64SvpN2kseqbI8WWGEe4sBAPOpcUgNS-g5xpuX-LYo2Re0S0NETy_c4GK181-sEbCAFGHaTES5TahDCfHR2gGeOYlIDxl473sQrLlxpPtawBDgqLCYH3s6Otd4xKuV6ygX93tDhU2-ThBSp-LdjAGB8eZhuP50W10oQAugshlgvEjL-8w5W8y7cl86I7RrOUBTUWniyZ04q-nlStWY1UuIFedpwKdcTa-TIUQSPdxgcXOU4JpP9rgM-9PKw-GaknxrC3mv6VoeuTMN6BMmWAozMENrg5tsu7soNmgma3ZKysWVyUCVjt5sIZKFUh6uspFDpCJ7niV7LxrzKiMBW2OeWvl6DoiqLklRX-gCFDmqwCMB6BH7_AvK2qUJ9_nUO0mVhsmg9HxNvrHyVHPOrsPyM-QBiG1kuA9b4bpz8Spi75hrqf27Wb2o4Ew4c4fKmmMRgzujSZ9pqUgESNaqN-urh_VasCetDA9CMAeD3JwysDDE8sifh4gc27P5MdL6Ax2puQs-qZj9uuIdC-P0-hrhMtOLcyr8isoZdEnUGFVpKDR06eNUrZ7ewpOnUy9e8OBgNUCpj9Q57_rTiyLh6SLMC6jb3Zu5_QmRXbnSxFqKwuEyOJHKLJob--Ro56jEONiV9Kvilvw-HqDjxlIdvhFBMnSAuX6HuW_povojUvjA3jjKyD876K6KkH8qMET5uQOhQ-mT-x1ZCipka1bJZWvLJ1crUkQM70zz0kSjPc0gUKI2kvuP9pkc2GIJ8dGrw1756Qr_C7h9qrJP-yEk2mrigXMJsZosu8na1FtmyFWLOJZlKQK2Dz8-AmFlky5cIrAjpwK7v4SKbftjC8NDynDcm5k4z6horXmybStSxnu4MpEzaFPbrFpaSGUIhhuHKOt2FpljVDzfbBIzlCJvnqPR8iXh-K4UGo8o86nxUQtib0up6C8Ied5KoG3YYlfLydNTIZlw2U65iAjFWuRIR3ubZiTpMIQ-TF_CM9RCbl4BUwBkMejMJilO-YP687F5AKw4OJj-W1jPu2FsuSFHGznTYRA4IxhcC9mLt9iW6IX66reXqsNEjm4twQKGAQ0sMaEwV2Ca3sZ4HevxqsEjqFAOuGlY7UloLLty78mj55qYozMDWbPKHsqqKXUqFQi02EtVxckw9ux9PXIzxgNfb2CwIKTAqT4G2F14UOuxApsy7hq7Oj8bWS0q80wIYlarSKLCg0gjKXzouQgFStSpxfrrx1ZJUqWNrt5C0reTg',
'data:image/jpeg;base64,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',
1)
GO

 create table MovieGenre
 (
 Id int not null identity,
 [Description] nvarchar(max) not null,  
 MovieId int not null primary key foreign key references Movies(Id)on delete cascade
 );
 go

 insert MovieGenre ([Description],MovieId)values
 ('������, �����, �������',1
 )
go
 create table [Description]
 (
 Id int not null identity,
 SmallDescription nvarchar(max) not null,
 BigDescription nvarchar(max) not null,  
 MovieId int not null primary key foreign key references Movies(Id)on delete cascade
 );
 go

  insert [Description] (SmallDescription,BigDescription,MovieId)values
 ('����� ���������� � ��� �����������, ������ ���� ������� ������������ ��� �� ��� ������, ������ �����, �� ���� ���� ���������� ����� ��������.',
 '����� ������ 1945 ����, � ������ ��� ������� ��� ������: �������� �������� ������������ ������ ��������� ����������, � ����������� �� ������������� ���������� ������ ���� ��� ���. ���, ������, ������ �� ������, ��� �� ���� � ������ ������� ������ �� �������� ��� ��������� �����, � ������ ������� �������, ��� ������ ���� �� ���������� ��������� ����. ����� ���������� � ��� �����������, ������ ���� ������� ������������ ��� �� ��� ������, ������ �����, �� ���� ���� ���������� ����� ��������. �������� �������, ��������� ��� ��������, ��������� � ����������� �������� ������� � ������, � ����� � ������, ���������� ���� ���� � ������ � ����� � ��������� ����� ����� �����. ���� ������������ ����������� ���� ����������� ��� �������, ����� � ��� ������� �������������� ������� ���������� ������ �������, ������� ������ �� ��������� � ��� �� �������� ���������� � ����, ��� ������ ������ � ��� ��������� �������� ������������ �����. ������� ������ ���������� ������ ����������, ����� ������� ������� ���������� ������� ������� � ���������������� ������.',1)
go

 --create series part
create table Series
 (
Id INT not null primary key Identity,
Title nvarchar(max) not null,
[Description] nvarchar(max) not null,
ReleaseDate nvarchar(max) not null,
Duration nvarchar(max) not null,
Trailer nvarchar(max) not null,
Raiting nvarchar(max) not null,
Director nvarchar(max) not null,
Country nvarchar(max) not null,
AgeLimit nvarchar(max) not null
);
go

create table Season
(
Id INT not null primary key Identity,
Title nvarchar(max) not null,
[Description] nvarchar(max) not null,
ReleaseDate nvarchar(max) not null,
Trailer nvarchar(max) not null,
Raiting nvarchar(max) not null,
Director nvarchar(max) not null,
Country nvarchar(max) not null,
AgeLimit nvarchar(max) not null,
SeriesId int foreign key references Series(Id)on delete cascade not null,
);
go


create table SeriesActor
(
Id INT not null primary key Identity,
[Name] nvarchar(max) not null,
[Surname] nvarchar(max) not null,
[Picture] nvarchar(max) not null,
BirthDate nvarchar(max) not null,
BirthPlace nvarchar(max) not null,
[Description] nvarchar(max) not null,
SeriesId int foreign key references Series(Id) on delete cascade not null
);
go
 create table SeriesPoster
 (
 Id INT not null primary key foreign key references Series(Id)on delete cascade,
 SmallPoster nvarchar(max) not null,
 BigPoster nvarchar(max) not null,
 SeriesId int not null
 );
 go

 create table SeriesGenre
 (
 Id int not null primary key foreign key references Series(Id)on delete cascade,
 [Description] nvarchar(max) not null,  
 SeriesId int not null
 );
 go
create table Episode
(
Id INT not null primary key Identity,
Title nvarchar(max) not null,
[Description] nvarchar(max) not null,
Duration nvarchar(max) not null,
Preview nvarchar(max) not null,
SeasonId int foreign key references Season(Id) on delete cascade not null
);
go

create table SeasonPoster
 (
 Id INT not null primary key foreign key references Season(Id)on delete cascade,
 SmallPoster nvarchar(max) not null,
 BigPoster nvarchar(max) not null,
 SeasonId int not null
 );
 go

