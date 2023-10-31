SELECT *
FROM [dbo].[User]
    JOIN Student on Std_id = [dbo].[User].id and Std_id = @userId