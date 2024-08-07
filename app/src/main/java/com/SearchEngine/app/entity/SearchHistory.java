package com.SearchEngine.app.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(collection = "search_history")
public class SearchHistory {
    @Id
    private String id;

    private String userId;
    private String query;
    private Instant createdAt;

    public SearchHistory() {
        super();
    }

    public SearchHistory(String id, String userId, String query, Instant createdAt) {
        super();
        this.id = id;
        this.userId = userId;
        this.query = query;
        this.createdAt = createdAt;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
