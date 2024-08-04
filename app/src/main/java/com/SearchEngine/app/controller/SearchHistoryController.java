package com.SearchEngine.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.SearchEngine.app.entity.SearchHistory;
import com.SearchEngine.app.service.SearchHistoryService;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // Adjust to match your frontend URL
@RequestMapping("/api/search-histories")
public class SearchHistoryController {
    @Autowired
    private SearchHistoryService searchHistoryService;

    @PostMapping
    public void saveSearchHistory(@RequestBody SearchHistoryDTO searchHistoryDto) {
        System.out.println("Saving search history: " + searchHistoryDto); // Log the incoming request
        searchHistoryService.saveSearchHistory(searchHistoryDto.getUserId(), searchHistoryDto.getQuery());
    }

    @GetMapping
    public List<SearchHistory> getSearchHistories(@RequestParam String userId) {
        System.out.println("Fetching search history for user: " + userId); // Log the request
        List<SearchHistory> histories = searchHistoryService.getSearchHistories(userId);
        System.out.println("Returning search histories: " + histories); // Log the response
        return histories;
    }
}
