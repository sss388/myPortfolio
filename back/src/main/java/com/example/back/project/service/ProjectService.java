package com.example.back.project.service;

import com.example.back.project.entity.Project;
import com.example.back.project.repository.ProjectRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    public void deleteProject(String id) {
        projectRepository.deleteById(id);
    }
}
