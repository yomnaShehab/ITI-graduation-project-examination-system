SELECT Exam.Exam_id,
       Exam_date,
       Exam_duration,
       Exam_grade,
       No_of_qs,
       Exam_Question.Quest_id,
       Quest_txt,
       Quest_type,
       Quest_mark,
       Model_ans_id,
       Model_ans_txt,
       Exam.Crs_id,
       Choice.Choice_id,
       Choice.Choice_txt,
       Choice.Is_correct,
       Crs_name
FROM Exam
         JOIN Exam_Question ON Exam.Exam_id = Exam_Question.Exam_id
         JOIN Question ON Question.Quest_id = Exam_Question.Quest_id
         JOIN Choice ON Choice.Quest_id = Exam_Question.Quest_id
         JOIN Course ON Course.Crs_id = Exam.Crs_id
where Exam.Exam_id = @examId