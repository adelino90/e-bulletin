USE [master]
GO
/****** Object:  Database [Ebulletin]    Script Date: 6/24/2017 10:43:39 PM ******/
CREATE DATABASE [Ebulletin]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Ebulletin', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SERVER\MSSQL\DATA\Ebulletin.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Ebulletin_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SERVER\MSSQL\DATA\Ebulletin_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [Ebulletin] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Ebulletin].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Ebulletin] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Ebulletin] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Ebulletin] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Ebulletin] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Ebulletin] SET ARITHABORT OFF 
GO
ALTER DATABASE [Ebulletin] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Ebulletin] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Ebulletin] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Ebulletin] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Ebulletin] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Ebulletin] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Ebulletin] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Ebulletin] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Ebulletin] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Ebulletin] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Ebulletin] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Ebulletin] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Ebulletin] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Ebulletin] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Ebulletin] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Ebulletin] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Ebulletin] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Ebulletin] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Ebulletin] SET  MULTI_USER 
GO
ALTER DATABASE [Ebulletin] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Ebulletin] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Ebulletin] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Ebulletin] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Ebulletin] SET DELAYED_DURABILITY = DISABLED 
GO
USE [Ebulletin]
GO
/****** Object:  Table [dbo].[ebulletin_account_tbl]    Script Date: 6/24/2017 10:43:51 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ebulletin_account_tbl](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_type_id] [int] NULL,
	[username] [nvarchar](50) NULL,
	[password] [nvarchar](50) NULL,
	[first_name] [nvarchar](50) NULL,
	[last_name] [nvarchar](50) NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[post_tbl]    Script Date: 6/24/2017 10:43:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[post_tbl](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NULL,
	[title] [nvarchar](50) NULL,
	[subject] [nvarchar](50) NULL,
	[filename] [nvarchar](50) NULL,
	[description] [nvarchar](150) NULL,
	[posting_date_from] [datetime] NULL,
	[posting_date_to] [datetime] NULL,
	[date_submited] [datetime] NULL,
	[status] [bit] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[post_tbl_view]    Script Date: 6/24/2017 10:43:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[post_tbl_view](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[post_id] [int] NULL,
	[user_id] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[user_type]    Script Date: 6/24/2017 10:43:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_type](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[description] [nvarchar](50) NULL,
 CONSTRAINT [PK_user_type] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  StoredProcedure [dbo].[admin_post_view]    Script Date: 6/24/2017 10:43:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[admin_post_view]
	@user_id int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	Select post.id,post.title,post.subject,post.filename,post.description,acc.first_name+' '+acc.last_name as poser,CONVERT(VARCHAR(10),post.date_submited,101) as date_submited,
		   post.posting_date_from,post.posting_date_to,case when post.status = 1 then 'Approved' else 'Pending' end as status, 
		   case when EXISTS (select * from post_tbl_view post_view where post_view.post_id = post.id AND post_view.user_id=@user_id) then 'True' else 'False'
		   END as viewed
		from post_tbl post inner join ebulletin_account_tbl acc on post.user_id = acc.id
END

GO
/****** Object:  StoredProcedure [dbo].[approve_request]    Script Date: 6/24/2017 10:43:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[approve_request] 
	-- Add the parameters for the stored procedure here
	@post_id int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	UPDATE post_tbl set status = 1 where id = @post_id
END

GO
/****** Object:  StoredProcedure [dbo].[delete_post]    Script Date: 6/24/2017 10:43:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[delete_post]
	@post_id int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	Delete post_tbl where id = @post_id
END

GO
/****** Object:  StoredProcedure [dbo].[get_bulletin]    Script Date: 6/24/2017 10:43:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[get_bulletin]
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	/****** Script for SelectTopNRows command from SSMS  ******/
SELECT [id]
      ,[user_id]
      ,[title]
      ,[subject]
      ,[filename] as Files
      ,[description]
      ,[status]
  FROM [Ebulletin].[dbo].[post_tbl]
  Where GETDATE() > =[posting_date_from] AND GETDATE() <= [posting_date_to] AND [status] = 1
END

GO
/****** Object:  StoredProcedure [dbo].[get_dashboard]    Script Date: 6/24/2017 10:43:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[get_dashboard]
	-- Add the parameters for the stored procedure here
	@user_id int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT  id,title,subject,case when status = 0 then 'pending' else 'Approved' end as stat,CONVERT(VARCHAR(12),date_submited,107) as date_submited from post_tbl where user_id = @user_id
END

GO
/****** Object:  StoredProcedure [dbo].[insert_post]    Script Date: 6/24/2017 10:43:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE  [dbo].[insert_post]
    @user_id int,   
    @title nvarchar(50),
	@subject nvarchar(50),
	@filename nvarchar(50),
	@description nvarchar(50),
	@pdate_from date,
	@pdate_to date,
	@status bit   
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	insert into post_tbl(user_id,title,subject,filename,description,posting_date_from,posting_date_to,status,date_submited)
		Values
	(@user_id,@title,@subject,@filename,@description,@pdate_from,@pdate_to,@status,GETDATE())
END

GO
/****** Object:  StoredProcedure [dbo].[insert_user]    Script Date: 6/24/2017 10:43:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[insert_user]
	@fname nvarchar(50),
	@lname nvarchar(50),
	@username nvarchar(50),
	@password nvarchar(50),
	@user_type int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT into ebulletin_account_tbl(first_name,last_name,username,password,user_type_id)
	values(@fname,@lname,@username,@password,@user_type)
END

GO
/****** Object:  StoredProcedure [dbo].[update_user]    Script Date: 6/24/2017 10:43:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[update_user]
	@user_id int,
	@fname nvarchar(50),
	@lname nvarchar(50),
	@username nvarchar(50),
	@password nvarchar(50),
	@user_type int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
		UPDATE ebulletin_account_tbl set
		first_name = @fname,
		last_name = @lname ,
		password = @password,
		username = @username,
		user_type_id = @user_type
		where id = @user_id
END

GO
/****** Object:  StoredProcedure [dbo].[view_all_users]    Script Date: 6/24/2017 10:43:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[view_all_users]

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here


Select ac.id,ac.username, ac.first_name+' ' +ac.last_name as whole_name,ut.description as type from ebulletin_account_tbl ac inner join user_type ut on ac.user_type_id = ut.id

END

GO
/****** Object:  StoredProcedure [dbo].[view_post]    Script Date: 6/24/2017 10:43:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[view_post]
	-- Add the parameters for the stored procedure here
	@id int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT [id]
      ,[user_id]
      ,[title]
      ,[subject]
      ,[filename]
      ,[description]
      ,CONVERT(VARCHAR(24),[posting_date_from],111) as posting_date_from
      ,CONVERT(VARCHAR(24),[posting_date_to],111) as posting_date_to
      ,[date_submited]
      ,[status]
	   from post_tbl where id = @id
END

GO
/****** Object:  StoredProcedure [dbo].[view_user]    Script Date: 6/24/2017 10:43:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[view_user]
	-- Add the parameters for the stored procedure here
	@id int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * from ebulletin_account_tbl where id = @id
END

GO
USE [master]
GO
ALTER DATABASE [Ebulletin] SET  READ_WRITE 
GO
