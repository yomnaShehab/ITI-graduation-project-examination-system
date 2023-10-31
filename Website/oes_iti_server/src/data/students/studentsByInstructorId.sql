SELECT Instructor.Ins_id,
       Instructor.Ins_name,
       Ins_email,
       Ins_gender,
       Ins_phone,
       Ins_city,
       Instructor.Dept_id,
       Student.Std_id, Std_name, Std_email, Std_faculty,
       Std_gender, Std_grad_year, Std_City, Std_phone, Course.Crs_id, Course.Crs_name, Course.Crs_duration,
       Course.Topic_id
FROM Student
    JOIN Std_course
ON (Std_course.Std_id = Student.Std_id)
    JOIN Course ON (Std_course.Crs_id = Course.Crs_id)
    JOIN Instructor ON (Instructor.Ins_id = Course.Ins_id)
WHERE Instructor.Ins_id = @insId
