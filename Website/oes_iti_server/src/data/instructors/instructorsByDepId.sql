SELECT Department.Dept_location, Department.Dept_name,
       Ins_city, Ins_name, Ins_gender, Ins_email, Ins_phone, Ins_id, Department.Dept_id
FROM Instructor
    JOIN Department ON (Department.Dept_id = Instructor.Dept_id)
WHERE Department.Dept_id = @depId