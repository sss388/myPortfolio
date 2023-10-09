package com.example.back.project.service;

import com.example.back.project.entity.Project;
import com.example.back.project.entity.ProjectTab;
import com.example.back.project.repository.ProjectRepository;
import com.example.back.project.repository.ProjectTabRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ProjectTabRepository projectTabRepository;

    public List<Project> getAllProjects() {
        Sort sort = Sort.by(Sort.Direction.DESC, "id"); // id 필드를 기준으로 역순 정렬
        return projectRepository.findAll(sort);
    }

    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    public void deleteProject(String id) {
        projectRepository.deleteById(id);
    }

    public String saveProjectTab(ProjectTab projectTab) {
        ProjectTab exists = projectTabRepository.findByProjectIdAndTab(
                projectTab.getProjectId(), projectTab.getTab()
        );

        if (exists != null) {
            exists.setContent(projectTab.getContent());
            projectTabRepository.save(exists);
            return "update success";
        } else {
            projectTabRepository.save(projectTab);
            return "save success";
        }
    }

    public ProjectTab getProjectTab(String projectId, String tab) {
        return projectTabRepository.findByProjectIdAndTab(projectId, tab);
    }
}
