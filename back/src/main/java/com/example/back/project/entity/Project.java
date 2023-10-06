package com.example.back.project.entity;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Project")
public class Project {
    @Id
    private String id = new ObjectId().toString();

    private String image;

    private String title;

    private String summary;
}
