package com.SearchEngine.app.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.SearchEngine.app.entity.SearchHistory;

public interface SearchHistoryRepository extends MongoRepository<SearchHistory, String> {
    List<SearchHistory> findByUserId(String userId);
}
