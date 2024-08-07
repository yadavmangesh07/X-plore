package com.SearchEngine.app.service;


import com.SearchEngine.app.entity.Resource;
import com.SearchEngine.app.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SearchService {
    @Autowired
    private ResourceRepository resourceRepository;

    public List<Resource> search(String query) {
        return resourceRepository.findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(query, query);
    }
}