SELECT Exam.Exam_id,
       No_of_qs,
       Exam_grade,
       Exam_date,
       Exam.Crs_id,
       Std_id,
       Exam_duration,
       Grade,
       Crs_name
FROM Exam
         JOIN Course ON Course.Crs_id = Exam.Crs_id
         JOIN Std_Exam_Grade ON Std_Exam_Grade.Exam_id = Exam.Exam_id
where Std_id = @stdId
