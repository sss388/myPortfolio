package com.example.back.project.controller;

import com.example.back.project.entity.Project;
import com.example.back.project.entity.ProjectTab;
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
@CrossOrigin(origins = "http://ec2-3-27-129-86.ap-southeast-2.compute.amazonaws.com:3000")
//@CrossOrigin(origins = "http://localhost:3000")
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

    @PostMapping("/tabSave")
    public String tabSave(@RequestBody ProjectTab projectTab) {
        return projectService.saveProjectTab(projectTab);
    }

    @GetMapping("/getTab")
    public String getProjectTab(@RequestParam String projectId, @RequestParam String tab) {
        ProjectTab exists = projectService.getProjectTab(projectId, tab);
        if(exists != null) return projectService.getProjectTab(projectId, tab).getContent();

        return "empty";
    }
}
