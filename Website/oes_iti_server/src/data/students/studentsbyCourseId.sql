SELECT Student.Std_id
     ,[Std_name]
     ,[Std_email]
     ,[Std_age]
     ,[Std_gender]
     ,[Std_City]
     ,[Std_phone]
     ,[Std_grad_year]
     ,[Std_faculty],
    Course.Crs_name,
    Course.Crs_duration
FROM Student
    JOIN Std_course ON Student.[Std_id] = Std_course.[Std_id]
    JOIN Course ON Std_course.Crs_id = Course.Crs_id
WHERE Std_course.Crs_id = @courseId