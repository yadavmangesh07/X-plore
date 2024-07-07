package com.SearchEngine.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.SearchEngine.app.entity.SearchHistory;
import com.SearchEngine.app.service.SearchHistoryService;
@Controller
@RequestMapping("/search-history")
public class SearchHistoryController {

    @Autowired
    private SearchHistoryService searchHistoryService;

    @GetMapping("/json")
    public ResponseEntity<List<SearchHistory>> getSearchHistory() {
        try {
            List<SearchHistory> history = searchHistoryService.getAllSearchHistory();
            return ResponseEntity.ok(history);
        } catch (Exception e) {
            // Log the exception or handle it as needed
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @GetMapping("/html")
    public String searchHistory(Model model) {
        List<SearchHistory> history = searchHistoryService.getAllSearchHistory();
        model.addAttribute("searchHistory", history);
        return "searchHistory"; // Assuming you have a searchHistory.jsp to display history
    }

}
