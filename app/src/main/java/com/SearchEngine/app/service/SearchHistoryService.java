package com.SearchEngine.app.service;

//import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SearchEngine.app.entity.SearchHistory;
import com.SearchEngine.app.repository.SearchHistoryRepository;

import jakarta.transaction.Transactional;

@Service
public class SearchHistoryService {

    @Autowired
    private SearchHistoryRepository searchHistoryRepository;
    
    @Transactional
    public void saveSearchHistory(SearchHistory searchHistory) {
        searchHistoryRepository.save(searchHistory);
    }

    public List<SearchHistory> getAllSearchHistory() {
        return searchHistoryRepository.findAll();
    }
}
