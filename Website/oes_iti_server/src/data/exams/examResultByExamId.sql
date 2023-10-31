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
       Std_Answer.Std_ans_txt,
       Std_Answer.Std_id,
       Std_qs_grade,
       Grade,
       Choice.Choice_id,
       Choice.Choice_txt,
       Choice.Is_correct,
       Crs_name
FROM Exam
         JOIN Exam_Question ON Exam.Exam_id = Exam_Question.Exam_id
         JOIN Question ON Question.Quest_id = Exam_Question.Quest_id
         JOIN Std_Answer ON Std_Answer.Exam_id = Exam.Exam_id
    and Std_Answer.Quest_id = Exam_Question.Quest_id
         JOIN Std_Exam_Grade ON Std_Exam_Grade.Exam_id = Exam.Exam_id
    and Std_Exam_Grade.Std_id = Std_Answer.Std_id
         JOIN Choice ON Choice.Quest_id = Exam_Question.Quest_id
         JOIN Course ON Course.Crs_id = Exam.Crs_id
where Exam.Exam_id = @examId
  and Std_Answer.Std_id = @stdId