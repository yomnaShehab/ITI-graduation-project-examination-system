SELECT Course.Crs_id
     ,[Crs_name]
     ,[Crs_duration]
     ,[Ins_id ],
    Topic.Topic_id,
    Topic.Topic_name
FROM [dbo].[Course]
    JOIN Topic ON (Course.[Topic_id ] = Topic.Topic_id)
Where Topic.Topic_id = @topicId