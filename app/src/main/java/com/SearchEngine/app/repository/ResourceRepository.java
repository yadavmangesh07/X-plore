package com.SearchEngine.app.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.SearchEngine.app.entity.Resource;

public interface ResourceRepository extends MongoRepository<Resource, String> {
    List<Resource> findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String title, String description);

    // List<Resource> findByTitleContainingOrDescriptionContaining(String query, String query2);
}
