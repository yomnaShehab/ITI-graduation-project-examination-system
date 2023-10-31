UPDATE Std_Exam_Grade
SET
    Std_id = @stdId,
    Exam_id = @examId,
    Grade = @grade
WHERE Exam_id = @examId
  AND Std_id = @stdId

SELECT * FROM Std_Exam_Grade
WHERE Exam_id = @examId
  AND Std_id = @stdId