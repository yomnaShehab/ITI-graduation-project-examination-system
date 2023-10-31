SELECT Distinct Course.Crs_id,
                Crs_name,
                Crs_duration,
                Topic_name,
                Course.Ins_id,
                Ins_name,
                Ins_email,
                Department.Dept_name,
                Crs_grade
FROM [Examination_System].[dbo].[Course]
    JOIN Std_course ON Course.Crs_id = Std_course.Crs_id
    JOIN Topic ON Course.Topic_id  = Topic.Topic_id
    JOIN Instructor ON Instructor.Ins_id = Course.Ins_id
    JOIN Department ON Department.Dept_id = Instructor.Dept_id
WHERE Course.Crs_id = @courseId