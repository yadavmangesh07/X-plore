package com.SearchEngine.app.controller;

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

import com.SearchEngine.app.service.SearchService;

@Controller
@CrossOrigin(origins = "https://xplore-2axl.onrender.com")
@RequestMapping("/search")
public class SearchController {

    @Autowired
    private SearchService searchService;


    // For JSP views
    @GetMapping
    public String search(@RequestParam String query, @RequestParam(required = false) String userId, Model model) {
        List<Resource> results = searchService.search(query);
        if (results.isEmpty()) {
            model.addAttribute("noResultsMessage", "No results found for your search query.");
        } else {
            model.addAttribute("results", results);
        }
        
        
        
        return "searchResults"; 
    }

    // For JSON responses
    @GetMapping("/api")
    public ResponseEntity<List<Resource>> searchApi(@RequestParam String query, @RequestParam(required = false) String userId) {
        List<Resource> results = searchService.search(query);
        
        
        
        
        return ResponseEntity.ok(results);
    }

    // For the search form view
    @GetMapping("/form")
    public String searchForm() {
        return "searchForm";
    }

    
}
