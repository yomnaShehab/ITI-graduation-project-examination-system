SELECT Exam_id,
       No_of_qs,
       Exam_grade,
       Exam_date,
       Exam.Crs_id,
       Std_id,
       Crs_grade,
       Exam_duration
FROM Exam
         JOIN Std_course ON Std_course.Crs_id = Exam.Crs_id
WHERE Std_course.Std_id = @stdId
  and Std_course.Crs_id = @courseId
