WITH StdDept AS
         (SELECT DISTINCT sct.Std_id, d.Dept_id
          FROM Std_course sct JOIN Course c
                                   ON sct.Crs_ID = c.Crs_ID
                              INNER JOIN Instructor ins
                                         ON c.[Ins_id ] = ins.Ins_id
                              INNER JOIN Department d
                                         ON ins.Dept_id = d.Dept_id)

SELECT Department.Dept_name, Department.Dept_location ,s.*
FROM Student s LEFT JOIN StdDept sd
                         ON s.Std_ID = sd.Std_ID
               LEFT JOIN Department
                         ON (Department.Dept_id = sd.Dept_id)
WHERE sd.Dept_id = @depId