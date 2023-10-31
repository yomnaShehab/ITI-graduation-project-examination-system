SELECT *
FROM [dbo].[User]
    JOIN Instructor on Ins_id = [User].id and Ins_id = @userId