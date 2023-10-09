package com.example.back.project.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "ProjectTab")
public class ProjectTab {
    @Id
    private String id;

    private String projectId;

    private String tab;

    private String content;
}
