INSERT INTO Crs_Evaluation(Std_id, Crs_id, Crs_Material_helpful,
                           Crs_Content, Crs_well_organised, Inst_ClassTime, Inst_Responce_Qus,
                           Inst_GiveClearEx)
VALUES (@stdId, @crsId, @crsMaterialHelpful, @crsContent,
        @crsWellOrganised,
        @instClassTime, @instResponceQus, @instGiveClearEx)

SELECT *
FROM [Examination_System].[dbo].[Crs_Evaluation]
WHERE Std_id = @stdId