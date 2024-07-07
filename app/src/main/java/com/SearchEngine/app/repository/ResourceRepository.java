package com.SearchEngine.app.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SearchEngine.app.entity.Resource;

@Repository
public interface ResourceRepository extends JpaRepository<Resource,String> {
    List<Resource> findByTitleContainingOrDescriptionContaining(String title, String description);
}

