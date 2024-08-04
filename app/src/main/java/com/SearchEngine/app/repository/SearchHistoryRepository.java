package com.SearchEngine.app.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SearchEngine.app.entity.SearchHistory;

public interface SearchHistoryRepository extends JpaRepository<SearchHistory, Long> {
    List<SearchHistory> findByUserId(String userId);
}
