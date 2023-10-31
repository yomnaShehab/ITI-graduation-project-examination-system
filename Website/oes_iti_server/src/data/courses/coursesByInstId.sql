SELECT [Ins_name]
        ,[Ins_email]
        ,[Ins_phone ]
        ,[Ins_city]
        ,[Ins_gender]
        ,[Dept_id],
    [Crs_name],
    [Crs_duration],
    [Crs_id],
    [Topic_id],
    Course.[Ins_id]
FROM Course
JOIN Instructor ON (Course.[Ins_id] = Instructor.Ins_id)
where Instructor.Ins_id = @insId