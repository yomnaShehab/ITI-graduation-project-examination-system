SELECT Course.Crs_id,
       Crs_name,
       Crs_duration,
       Topic_name,
       Std_course.Std_id,
       Course.Ins_id,
       Ins_email,
       Ins_name,
       Department.Dept_name,
       Crs_grade,
       Grade,
       Exam.Exam_date
FROM [dbo].[Course]
    JOIN Std_course
ON Std_course.Crs_id = Course.Crs_id
    JOIN Topic
    ON Course.Topic_id = Topic.Topic_id
    JOIN Instructor
    ON Instructor.Ins_id = Course.Ins_id
    JOIN Department
    ON Department.Dept_id = Instructor.Dept_id
    JOIN Exam ON Exam.Crs_id = Std_course.Crs_id
    JOIN Std_Exam_Grade
    ON Std_Exam_Grade.Std_id = Std_course.Std_id and Std_Exam_Grade.Exam_id = Exam.Exam_id
WHERE Std_course.Std_id = @stdId
