package com.SearchEngine.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SearchEngine.app.entity.SearchHistory;
import com.SearchEngine.app.repository.SearchHistoryRepository;

@Service
public class SearchHistoryService {

    @Autowired
    private SearchHistoryRepository searchHistoryRepository;

    public void saveSearchHistory(String userId, String query) {
        SearchHistory searchHistory = new SearchHistory();
        searchHistory.setUserId(userId);
        searchHistory.setQuery(query);
        searchHistoryRepository.save(searchHistory);
    }

    public List<SearchHistory> getSearchHistories(String userId) {
        return searchHistoryRepository.findByUserId(userId);
    }
   
}