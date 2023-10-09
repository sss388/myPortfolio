package com.example.back.project.repository;

import com.example.back.project.entity.ProjectTab;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectTabRepository extends MongoRepository<ProjectTab, String> {
    ProjectTab findByProjectIdAndTab(String projectId, String tab);
}
