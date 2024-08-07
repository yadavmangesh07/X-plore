package com.SearchEngine.app.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "resources")
public class Resource {
    @Id
    private String id;
    private String title;
    private String url;
    private String description;

    public Resource() {
    }

    public Resource(String id, String title, String url, String description) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
