package com.SearchEngine.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SearchEngine.app.entity.Resource;
import com.SearchEngine.app.repository.ResourceRepository;

@Service
public class ResourceService {

    @Autowired
    private ResourceRepository resourceRepository;

    public List<Resource> getAllResources() {
        return resourceRepository.findAll();
    }

    public Optional<Resource> getResourceById(String id) {
        return resourceRepository.findById(id);
    }

    public List<Resource> createResources(List<Resource> resources) {
        return resourceRepository.saveAll(resources);
    }
    public Resource createResource(Resource resource) {
        return resourceRepository.save(resource);
    }

    public Resource updateResource(String id, Resource resource) throws Exception {
        if (!resourceRepository.existsById(id)) {
            throw new Exception("Resource with id " + id + " not found");
        }
        
        // Ensure the ID is set correctly in the resource object
        resource.setId(id);

        return resourceRepository.save(resource);
    }

    public void deleteResource(String id) {
        resourceRepository.deleteById(id);
    }
}

