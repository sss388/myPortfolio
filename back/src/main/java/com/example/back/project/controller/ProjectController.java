package com.example.back.project.controller;

import com.example.back.project.entity.Project;
import com.example.back.project.service.ProjectService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {
    @Autowired
    ProjectService projectService;

    @GetMapping("/getall")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @PostMapping("/create")
    public String createProject(@RequestBody Project project) {

        Project newProject = projectService.createProject(project);

        return newProject.getId();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteProject(@PathVariable("id") String id) {
        projectService.deleteProject(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
