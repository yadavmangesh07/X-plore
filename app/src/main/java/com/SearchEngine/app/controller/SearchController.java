//package com.SearchEngine.app.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import com.SearchEngine.app.entity.Resource;
//import com.SearchEngine.app.service.SearchService;
//
//@Controller
//@RequestMapping("/search")
//public class SearchController {
//
//    @Autowired
//    private SearchService searchService;
//
//    // For JSP views
//    @GetMapping
//    public String search(@RequestParam String query, Model model) {
//        List<Resource> results = searchService.search(query);
//        if (results.isEmpty()) {
//            model.addAttribute("noResultsMessage", "No results found for your search query.");
//        } else {
//            model.addAttribute("results", results);
//        }
//        
//        return "searchResults"; 
//    }
//
//    // For JSON responses
//    @GetMapping("/api")
//    public ResponseEntity<List<Resource>> searchApi(@RequestParam String query) {
//        List<Resource> results = searchService.search(query);
//        return ResponseEntity.ok(results);
//    }
//
//    // For the search form view
//    @GetMapping("/form")
//    public String searchForm() {
//        return "searchForm";
//    }
//}
package com.SearchEngine.app.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;

import com.SearchEngine.app.entity.Resource;
import com.SearchEngine.app.entity.SearchHistory;
import com.SearchEngine.app.service.SearchService;
import com.SearchEngine.app.service.SearchHistoryService;

@Controller
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/search")

public class SearchController {

    @Autowired
    private SearchService searchService;

    @Autowired
    private SearchHistoryService searchHistoryService;

    // For JSP views
    @GetMapping
    public String search(@RequestParam String query, Model model) {
        List<Resource> results = searchService.search(query);
        if (results.isEmpty()) {
            model.addAttribute("noResultsMessage", "No results found for your search query.");
        } else {
            model.addAttribute("results", results);
        }
        
        // Save search history
        saveSearchHistory(query);
        
        return "searchResults"; 
    }

    // For JSON responses
    @GetMapping("/api")
    public ResponseEntity<List<Resource>> searchApi(@RequestParam String query) {
        List<Resource> results = searchService.search(query);
        
        // Save search history
        saveSearchHistory(query);
        
        return ResponseEntity.ok(results);
    }

    // For the search form view
    @GetMapping("/form")
    public String searchForm() {
        return "searchForm";
    }

    // Method to save search history
    private void saveSearchHistory(String query) {
        SearchHistory searchHistory = new SearchHistory(query, new Date());
        searchHistoryService.saveSearchHistory(searchHistory);
    }
}
